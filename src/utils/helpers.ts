import type {
	Point,
	Rectangle,
	TAssemblyUnit,
	TAssemblyUnitPart,
	TAssemblyUnitParts,
	TBlueprint,
	TInsulationGroup,
	TInsulationItem,
} from './types'

export const isDate = (data: any): boolean => {
	return !isNaN(Date.parse(data))
}

export const isBlueprint = (data: any): data is TBlueprint => {
	return data && typeof data.id === 'string' && isDate(data.date)
}

export const isAssemblyUnit = (data: any): data is TAssemblyUnit => {
	return (
		data &&
		typeof data.id === 'string' &&
		typeof data.name === 'string' &&
		isAssemblyUnitPartsArray(data.parts) &&
		typeof data.blueprint === 'string' &&
		isDate(data.date)
	)
}

export const isAssemblyUnitPartsArray = (
	data: any[]
): data is TAssemblyUnitParts[] => {
	return (
		Array.isArray(data) &&
		typeof data[0].partId === 'string' &&
		typeof data[0].quantity === 'number'
	)
}

export const isAssemblyUnitPart = (data: any): data is TAssemblyUnitPart => {
	return (
		data && typeof data.id === 'string' && typeof data.name === 'string' // &&
		// isBlueprint(data.blueprint) &&
		// isDate(data.date)
	)
}

export const isRectangle = (data: any): data is Rectangle => {
	return (
		data && typeof data.width === 'number' && typeof data.height === 'number'
	)
}

const isPoint = (data: any): data is Point => {
	return data && typeof data.x === 'number' && typeof data.y === 'number'
}

export const isPolygon = (data: any): data is Rectangle => {
	return data && data.segments.every((segment: any) => isPoint(segment))
}

export const isInsulationItem = (data: any): data is TInsulationItem => {
	return (
		(data &&
			typeof data.thickness === 'number' &&
			typeof data.adhesive === 'boolean' &&
			isRectangle(data.shape)) ||
		isPolygon(data.shape)
	)
}

export const isInsulationGroup = (data: any): data is TInsulationGroup => {
	return (
		data &&
		typeof data.id === 'string' &&
		typeof data.name === 'string' &&
		data.items.every((item: any) => isInsulationItem(item)) &&
		isDate(data.date)
	)
}

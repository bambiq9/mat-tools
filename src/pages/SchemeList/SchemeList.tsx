import { SchemeListUI } from '@components/ui/pages/SchemeListUI'
import { useEffect, useMemo, useState, type FC } from 'react'
import type { TAssemblyUnitPart } from '@utils/types'
import { useDispatch, useSelector } from '@services/store'
import {
	getAssemblyUnitPartsList,
	getAssemblyUnitsList,
	selectUnit,
	selectUnitPartsList,
	selectUnitsList,
	setUnit,
} from '@services/assemblySlice'
import { useLocation } from 'react-router-dom'

export const SchemeList: FC = () => {
	const dispatch = useDispatch()
	const location = useLocation()

	const initialParts = useSelector(selectUnitPartsList)
	const unitsList = useSelector(selectUnitsList)
	const unit = useSelector(selectUnit)

	const [parts, setParts] = useState<TAssemblyUnitPart[]>(initialParts)
	const [filter, setFilter] = useState<string>('')
	const [selectedUnit, setSelectedUnit] = useState<string | null>(null)

	useEffect(() => {
		dispatch(getAssemblyUnitsList())
		dispatch(getAssemblyUnitPartsList())
	}, [])

	useEffect(() => {
		if (!selectedUnit) {
			setParts(initialParts)
			return
		}

		dispatch(setUnit(selectedUnit))
		const parts = initialParts.filter((currentPart) =>
			unit?.parts.some((part) => part.partId === currentPart.id)
		)

		setParts(parts)
	}, [initialParts, selectedUnit, unit])

	const filteredParts = useMemo<TAssemblyUnitPart[]>(() => {
		const lowerCaseFilter = filter.toLowerCase()
		return parts.filter(
			(part) =>
				part.blueprint?.id.toLowerCase().includes(lowerCaseFilter) ||
				part.name.toLowerCase().includes(lowerCaseFilter)
		)
	}, [filter, parts])

	return (
		<SchemeListUI
			parts={filteredParts}
			filter={filter}
			filterHandler={setFilter}
			selectedUnitId={selectedUnit}
			unitsList={unitsList}
			selectUnitHandler={setSelectedUnit}
			locationState={{ background: location }}
		/>
	)
}

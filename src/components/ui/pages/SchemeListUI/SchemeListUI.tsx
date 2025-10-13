import {
	Box,
	List,
	ListItemButton,
	ListItemText,
	MenuItem,
	Select,
	Stack,
	TextField,
	Typography,
} from '@mui/material'
import type { FC } from 'react'
import type { TSchemeListUIProps } from './type'
import { BuildCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export const SchemeListUI: FC<TSchemeListUIProps> = ({
	parts,
	filter,
	filterHandler,
	selectedUnitId,
	selectUnitHandler,
	unitsList,
	locationState,
}) => {
	return (
		<Box sx={{ width: '60%' }}>
			<Box>
				<Stack gap={4}>
					<Typography variant='h2'>Поиск по чертежам</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
						<Select
							defaultValue={null}
							displayEmpty
							sx={{ width: '25%' }}
							value={selectedUnitId ?? ''}
							onChange={(e) => selectUnitHandler(e.target.value as string)}
						>
							<MenuItem value=''>Все детали</MenuItem>
							{unitsList.map((unit) => (
								<MenuItem value={unit.id} key={unit.id}>
									{unit.name}
								</MenuItem>
							))}
						</Select>
						<TextField
							value={filter}
							onChange={(e) => filterHandler(e.target.value)}
							placeholder='Номер чертежа, название детали...'
							fullWidth
						/>
					</Box>
					<List>
						{parts.map((part) => (
							<ListItemButton
								component={Link}
								to={`part/${part.id}`}
								state={locationState}
								key={part.id}
								sx={{ gap: 2, p: 2, borderRadius: 4 }}
							>
								<BuildCircle />
								<ListItemText
									primary={`${part.blueprint?.id ? `${part.blueprint.id} | ` : ''}${part.name}`}
								/>
							</ListItemButton>
						))}
					</List>
				</Stack>
			</Box>
		</Box>
	)
}

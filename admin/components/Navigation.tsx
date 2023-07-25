import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { HistoryIcon, LeafIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<LeafIcon />
				<>
					Plants
				</>
			</Stack>}
			to="admin/plant/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<HistoryIcon />
				<>
					Watering History
				</>
			</Stack>}
			to="admin/wateringHistory/list"
		/>
	</HasRole>
</Menu>)

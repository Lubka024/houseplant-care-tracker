import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { PlantForm } from '../../../components/forms/PlantForm'
import { PlantSideForm } from '../../../components/forms/PlantSideForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit plant
			</SlotSources.Title>
			<EditScope entity="Plant(id=$id)" redirectOnSuccess="admin/plant/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/plant/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<SlotSources.Sidebar>
					<PlantSideForm />
				</SlotSources.Sidebar>
				<PlantForm />
			</EditScope>
		</>
	)
}

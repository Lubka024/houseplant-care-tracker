import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { PlantForm } from '../../../components/forms/PlantForm'
import { PlantSideForm } from '../../../components/forms/PlantSideForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create plant
			</SlotSources.Title>
			<CreateScope entity="Plant" redirectOnSuccess="admin/plant/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create plant" labelSaved="Create plant" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/plant/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Plants
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Sidebar>
					<PlantSideForm />
				</SlotSources.Sidebar>
				<>
					<PlantForm />
				</>
			</CreateScope>
		</>
	)
}

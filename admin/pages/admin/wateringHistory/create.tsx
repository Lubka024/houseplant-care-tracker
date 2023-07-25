import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { WateringHistoryForm } from '../../../components/forms/WateringHistoryForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create watering history
			</SlotSources.Title>
			<CreateScope entity="WateringHistory" redirectOnSuccess="admin/wateringHistory/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create watering history" labelSaved="Create watering history" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/wateringHistory/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Watering histories
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<WateringHistoryForm />
				</>
			</CreateScope>
		</>
	)
}

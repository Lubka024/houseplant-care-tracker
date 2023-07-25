import { Box, DetailScope, DisplayTextField, LinkButton, Stack } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Watering history detail
			</SlotSources.Title>
			<DetailScope entity="WateringHistory(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/wateringHistory/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Watering histories
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/wateringHistory/edit(id: $entity.id)">
						Edit watering history
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="plant.name" label="Plant" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="wateredAt" label="Watered at" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}

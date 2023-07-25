import { Box, DataGrid, DateCell, DeleteEntityButton, DetailScope, DisplayTextField, FieldContainer, GenericCell, ImageFieldView, LinkButton, Stack } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { getImageResizeUrl } from '../../../scripts/getImageResizeUrl'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Plant detail
			</SlotSources.Title>
			<DetailScope entity="Plant(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/plant/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Plants
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/plant/edit(id: $entity.id)">
						Edit plant
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="type" label="Type" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<FieldContainer label="Image" labelPosition="labelLeft">
									<ImageFieldView
										srcField="picture.url"
										formatUrl={srcFieldValue => getImageResizeUrl(srcFieldValue, { width: 100 })}
										width={100}
									/>
								</FieldContainer>
							</div>
							<div className="box-item">
								<DisplayTextField field="wateringSchedule" label="Watering schedule" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="lastWatered" label="Last watered" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Watering histories
								</h2>
							</Stack>
						</div>
						<DataGrid entities="WateringHistory[plant.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/wateringHistory/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<DateCell field="wateredAt" header="Watered at" />
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}

import { DataGridScope, DateCell, DeleteEntityButton, GenericCell, ImageFieldView , LinkButton, NumberCell, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'
import { getImageResizeUrl } from '../../../scripts/getImageResizeUrl'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Plants
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="admin/plant/create">
					Create new plant
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Plant" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/plant/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell field="name" header="Name" />
				<TextCell field="type" header="Type" />
				<GenericCell shrunk>
					<ImageFieldView 
						srcField="picture.url"
						formatUrl={srcFieldValue => getImageResizeUrl(srcFieldValue, { width: 100 })}
						width={100}
					/>
				</GenericCell>
				<NumberCell field="wateringSchedule" header="Watering schedule" />
				<DateCell field="lastWatered" header="Last watered" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}

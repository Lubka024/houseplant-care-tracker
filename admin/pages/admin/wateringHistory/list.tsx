import { DataGridScope, DateCell, DeleteEntityButton, GenericCell, LinkButton } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Watering histories
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="admin/wateringHistory/create">
					Create new watering history
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="WateringHistory" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/wateringHistory/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<DateCell field="wateredAt" header="Watered at" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}

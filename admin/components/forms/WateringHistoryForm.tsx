import { Component, DateTimeField, SelectField } from '@contember/admin'

export const WateringHistoryForm = Component(() => <>
	<SelectField field="plant" label="Plant" lazy options="Plant.name" required />
	<DateTimeField field="wateredAt" label="Watered at" />
</>)

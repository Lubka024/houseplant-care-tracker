import { Component, DateTimeField, NumberField } from '@contember/admin'

export const PlantSideForm = Component(() => <>
	<NumberField field="wateringSchedule" label="Watering schedule" />
	<DateTimeField field="lastWatered" label="Last watered" />
</>)

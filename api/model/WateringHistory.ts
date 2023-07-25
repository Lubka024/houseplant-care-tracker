import { SchemaDefinition as def } from '@contember/schema-definition'

import { Plant } from './Plant'

export class WateringHistory {
	plant = def.manyHasOne(Plant, 'wateringHistory').notNull()
	wateredAt = def.dateTimeColumn()
}

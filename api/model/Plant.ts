import { SchemaDefinition as def } from '@contember/schema-definition'

import { Image } from './Image'
import { WateringHistory } from './WateringHistory'

@def.Unique('personId')
export class Plant {
	personId = def.uuidColumn()
	name = def.stringColumn()
	type = def.stringColumn()
	picture = def.manyHasOne(Image, 'plantPicture').setNullOnDelete()
	wateringSchedule = def.intColumn()
	lastWatered = def.dateTimeColumn()
	wateringHistory = def.oneHasMany(WateringHistory, 'plant')
}

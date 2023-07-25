import { SchemaDefinition as def } from '@contember/schema-definition'

import { Plant } from './Plant'

export class Image {
	url = def.stringColumn().notNull()
	width = def.intColumn()
	height = def.intColumn()
	size = def.intColumn()
	type = def.stringColumn()
	alt = def.stringColumn()
	createdAt = def.dateTimeColumn().notNull().default('now')
	plantPicture = def.oneHasMany(Plant, 'picture')
}

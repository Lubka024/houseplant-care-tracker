import { Component, ImageUploadField, TextField } from '@contember/admin'

export const PlantForm = Component(() => <>
	<TextField field="personId" label="Person id" />
	<TextField field="name" label="Name" />
	<TextField field="type" label="Type" />
	<ImageUploadField
		baseEntity="picture"
		urlField="url"
		fileSizeField="size"
		fileTypeField="type"
		heightField="height"
		widthField="width"
		label="Picture"
	/>
</>)

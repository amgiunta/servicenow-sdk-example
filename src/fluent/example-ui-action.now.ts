import { UiAction } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

export const exampleUiAction = UiAction({
    $id: Now.ID['example_ui_action_a'],
    table: 'x_460666_sdk_table_a',
    name: 'Set Name',
    roles: ['itil'],
    client: {
        isClient: true,
        onClick: 'setName()'
    },
    form: {
        showButton: true,
        style: 'primary'
    },
    script: Now.include('../server/example-set-name.js')
})
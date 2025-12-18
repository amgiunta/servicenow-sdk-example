import { Table, ReferenceColumn, StringColumn } from '@servicenow/sdk/core'

export const x_460666_sdk_table_a = Table({
    name: 'x_460666_sdk_table_a',
    label: 'Example Table A',
    schema: {
        name: StringColumn({}),
        ref_to_b: ReferenceColumn({
            referenceTable: 'x_460666_sdk_table_b',
            label: 'B Item'
        })
    },
    display: 'name'
})

export const x_460666_sdk_table_b = Table({
    name: 'x_460666_sdk_table_b',
    label: 'Example Table B',
    schema: {
        name: StringColumn({}),
        ref_to_a: ReferenceColumn({
            referenceTable: 'x_460666_sdk_table_a',
            label: 'A Item'
        })
    },
    display: 'name'
})
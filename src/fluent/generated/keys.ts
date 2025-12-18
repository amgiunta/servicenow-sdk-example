import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'e106f84ef8854f838d1a83ca48310c00'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '2572c9416dea42abae724eed08ec52f1'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '2e6252f172fc4581ac50ad475bf43eee'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'cfbd74df6ef244a288696531cb24e2cd'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '09353ecc3bb54c60b266c22ffc5b2603'
                    }
                }
            }
        }
    }
}

import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

import { Box, Heading } from '..'

import styles from './TrafficTable.module.scss'

import { ReactComponent as SortIcon } from 'assets/icons/sort.svg'
import { ReactComponent as CalendarIcon } from 'assets/icons/calendar.svg'
import { ReactComponent as ColumnsIcon } from 'assets/icons/columns.svg'
import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow-down.svg'

interface DataItem {
  id: number
  date: string
  currency: string
  impressions: string
  clicks: string
  ctr: string
  cpm: string
  cpv: string
  cpc: string
  spent: string
  coverage: string
  frequency: string
  viewbillity: string
  impression: string
  click: string
  ct: string
  cr: string
  cv: string
  cc: string
  spen: string
  coverag: string
  frequenc: string
  viewbillit: string
}

export const TrafficTable = () => {
  const data: DataItem[] = [
    {
      id: 121324555,
      date: '2023-08-08',
      currency: 'usd',
      impressions: '99,695',
      clicks: '1,566',
      ctr: '1.54',
      cpm: '0.65',
      cpv: '0.013',
      cpc: '0.023',
      spent: '64.77',
      coverage: '94,543',
      frequency: '1.3',
      viewbillity: '48.281',
      impression: '99,695',
      click: '1,566',
      ct: '1.54',
      cr: '0.65',
      cv: '0.013',
      cc: '0.023',
      spen: '64.77',
      coverag: '94,543',
      frequenc: '1.3',
      viewbillit: '48.281'
    },
    {
      id: 121324556,
      date: '2023-08-08',
      currency: 'usd',
      impressions: '99,695',
      clicks: '1,566',
      ctr: '1.54',
      cpm: '0.65',
      cpv: '0.013',
      cpc: '0.023',
      spent: '64.77',
      coverage: '94,543',
      frequency: '1.3',
      viewbillity: '48.281',
      impression: '99,695',
      click: '1,566',
      ct: '1.54',
      cr: '0.65',
      cv: '0.013',
      cc: '0.023',
      spen: '64.77',
      coverag: '94,543',
      frequenc: '1.3',
      viewbillit: '48.281'
    },
    {
      id: 121324557,
      date: '2023-08-08',
      currency: 'usd',
      impressions: '99,695',
      clicks: '1,566',
      ctr: '1.54',
      cpm: '0.65',
      cpv: '0.013',
      cpc: '0.023',
      spent: '64.77',
      coverage: '94,543',
      frequency: '1.3',
      viewbillity: '48.281',
      impression: '99,695',
      click: '1,566',
      ct: '1.54',
      cr: '0.65',
      cv: '0.013',
      cc: '0.023',
      spen: '64.77',
      coverag: '94,543',
      frequenc: '1.3',
      viewbillit: '48.281'
    },
    {
      id: 121324558,
      date: '2023-08-08',
      currency: 'usd',
      impressions: '99,695',
      clicks: '1,566',
      ctr: '1.54',
      cpm: '0.65',
      cpv: '0.013',
      cpc: '0.023',
      spent: '64.77',
      coverage: '94,543',
      frequency: '1.3',
      viewbillity: '48.281',
      impression: '99,695',
      click: '1,566',
      ct: '1.54',
      cr: '0.65',
      cv: '0.013',
      cc: '0.023',
      spen: '64.77',
      coverag: '94,543',
      frequenc: '1.3',
      viewbillit: '48.281'
    },
    {
      id: 121324559,
      date: '2023-08-08',
      currency: 'usd',
      impressions: '99,695',
      clicks: '1,566',
      ctr: '1.54',
      cpm: '0.65',
      cpv: '0.013',
      cpc: '0.023',
      spent: '64.77',
      coverage: '94,543',
      frequency: '1.3',
      viewbillity: '48.281',
      impression: '99,695',
      click: '1,566',
      ct: '1.54',
      cr: '0.65',
      cv: '0.013',
      cc: '0.023',
      spen: '64.77',
      coverag: '94,543',
      frequenc: '1.3',
      viewbillit: '48.281'
    },
    {
      id: 121324560,
      date: '2023-08-08',
      currency: 'usd',
      impressions: '99,695',
      clicks: '1,566',
      ctr: '1.54',
      cpm: '0.65',
      cpv: '0.013',
      cpc: '0.023',
      spent: '64.77',
      coverage: '94,543',
      frequency: '1.3',
      viewbillity: '48.281',
      impression: '99,695',
      click: '1,566',
      ct: '1.54',
      cr: '0.65',
      cv: '0.013',
      cc: '0.023',
      spen: '64.77',
      coverag: '94,543',
      frequenc: '1.3',
      viewbillit: '48.281'
    },
    {
      id: 121324561,
      date: '2023-08-08',
      currency: 'usd',
      impressions: '99,695',
      clicks: '1,566',
      ctr: '1.54',
      cpm: '0.65',
      cpv: '0.013',
      cpc: '0.023',
      spent: '64.77',
      coverage: '94,543',
      frequency: '1.3',
      viewbillity: '48.281',
      impression: '99,695',
      click: '1,566',
      ct: '1.54',
      cr: '0.65',
      cv: '0.013',
      cc: '0.023',
      spen: '64.77',
      coverag: '94,543',
      frequenc: '1.3',
      viewbillit: '48.281'
    },
    {
      id: 121324562,
      date: '2023-08-08',
      currency: 'usd',
      impressions: '99,695',
      clicks: '1,566',
      ctr: '1.54',
      cpm: '0.65',
      cpv: '0.013',
      cpc: '0.023',
      spent: '64.77',
      coverage: '94,543',
      frequency: '1.3',
      viewbillity: '48.281',
      impression: '99,695',
      click: '1,566',
      ct: '1.54',
      cr: '0.65',
      cv: '0.013',
      cc: '0.023',
      spen: '64.77',
      coverag: '94,543',
      frequenc: '1.3',
      viewbillit: '48.281'
    }
  ]

  const columnHelper = createColumnHelper<DataItem>()

  const columns = [
    columnHelper.accessor('id', {
      header: 'id'
    }),
    columnHelper.accessor('date', {
      header: 'date'
    }),
    columnHelper.accessor('currency', {
      header: 'currency'
    }),
    columnHelper.accessor('impressions', {
      header: 'impressions'
    }),
    columnHelper.accessor('clicks', {
      header: 'clicks'
    }),
    columnHelper.accessor('ctr', {
      header: 'ctr'
    }),
    columnHelper.accessor('cpv', {
      header: 'cpv'
    }),
    columnHelper.accessor('cpc', {
      header: 'cpc'
    }),
    columnHelper.accessor('coverage', {
      header: 'coverage'
    }),
    columnHelper.accessor('frequency', {
      header: 'frequency'
    }),
    columnHelper.accessor('viewbillity', {
      header: 'viewbillity'
    }),
    columnHelper.accessor('impression', {
      header: 'impression'
    }),
    columnHelper.accessor('click', {
      header: 'click'
    }),
    columnHelper.accessor('ct', {
      header: 'ct'
    }),
    columnHelper.accessor('cr', {
      header: 'cr'
    }),
    columnHelper.accessor('cv', {
      header: 'cv'
    }),
    columnHelper.accessor('cc', {
      header: 'cc'
    }),
    columnHelper.accessor('spen', {
      header: 'spen'
    }),
    columnHelper.accessor('coverag', {
      header: 'coverag'
    }),
    columnHelper.accessor('frequenc', {
      header: 'frequenc'
    }),
    columnHelper.accessor('viewbillit', {
      header: 'viewbillit'
    })
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className={styles['traffic-table']}>
      <div className='wrapper'>
        <Heading variant='h2'>Traffic</Heading>

        <Box>
          <div className={styles['top-line']}>
            <button className={styles.button}>
              <CalendarIcon /> 2023-08-08
            </button>

            <div className={styles['top-line-right']}>
              <button className={styles.button}>
                Columns <ColumnsIcon />
              </button>

              <button className={styles.button}>
                Export <ArrowDownIcon />
              </button>
            </div>
          </div>

          <div className={styles['table-container']}>
            <div className={styles.table}>
              <table>
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}

                          <span>
                            <SortIcon />
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>
                          <span>{flexRender(cell.column.columnDef.cell, cell.getContext())}</span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Box>
      </div>
    </div>
  )
}

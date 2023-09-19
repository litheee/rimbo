import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

import { Pagination } from 'ui'

import styles from './CreativesTable.module.scss'

import { ReactComponent as SortIcon } from 'assets/icons/sort.svg'

interface DataItem {
  name: string
  status: string
  approved: string
  size: string
  impressions: string
  ctr: string
  videoFirstQuartile: string
  videoSecondQuartile: string
  videoThirdQuartile: string
  videoComplete: string
}

export const CreativesTable = () => {
  const data: DataItem[] = [
    {
      name: '250х250 kz',
      status: 'Active',
      approved: 'Approved',
      size: '250x250',
      impressions: '0.032',
      ctr: '0.032',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      name: '250х250 kz',
      status: 'Active',
      approved: 'Approved',
      size: '250x250',
      impressions: '0.032',
      ctr: '0.032',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      name: '250х250 kz',
      status: 'Active',
      approved: 'Approved',
      size: '250x250',
      impressions: '0.032',
      ctr: '0.032',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      name: '250х250 kz',
      status: 'Active',
      approved: 'Approved',
      size: '250x250',
      impressions: '0.032',
      ctr: '0.032',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      name: '250х250 kz',
      status: 'Active',
      approved: 'Approved',
      size: '250x250',
      impressions: '0.032',
      ctr: '0.032',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      name: '250х250 kz',
      status: 'Active',
      approved: 'Approved',
      size: '250x250',
      impressions: '0.032',
      ctr: '0.032',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      name: '250х250 kz',
      status: 'Active',
      approved: 'Approved',
      size: '250x250',
      impressions: '0.032',
      ctr: '0.032',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      name: '250х250 kz',
      status: 'Active',
      approved: 'Approved',
      size: '250x250',
      impressions: '0.032',
      ctr: '0.032',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    },
    {
      name: '250х250 kz',
      status: 'Active',
      approved: 'Approved',
      size: '250x250',
      impressions: '0.032',
      ctr: '0.032',
      videoFirstQuartile: '48.281',
      videoSecondQuartile: '48.281',
      videoThirdQuartile: '48.281',
      videoComplete: '48.281'
    }
  ]
  const columnHelper = createColumnHelper<DataItem>()

  const columns = [
    columnHelper.accessor('name', {
      header: 'name'
    }),
    columnHelper.accessor('status', {
      header: 'status'
    }),
    columnHelper.accessor('approved', {
      header: 'approved'
    }),
    columnHelper.accessor('size', {
      header: 'size'
    }),
    columnHelper.accessor('impressions', {
      header: 'impressions'
    }),

    columnHelper.accessor('ctr', {
      header: 'ctr'
    }),
    columnHelper.accessor('videoFirstQuartile', {
      header: 'videoFirstQuartile'
    }),
    columnHelper.accessor('videoSecondQuartile', {
      header: 'videoSecondQuartile'
    }),
    columnHelper.accessor('videoThirdQuartile', {
      header: 'videoThirdQuartile'
    }),
    columnHelper.accessor('videoComplete', {
      header: 'videoComplete'
    })
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className={styles['creatives-table']}>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}

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

      <Pagination />
    </div>
  )
}

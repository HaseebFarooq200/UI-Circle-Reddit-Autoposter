import React from 'react';
import { Table} from 'antd';

const DataTable = ({title, columns, tableData, handleForceReload}) => {

    return (
          <Table 
            columns={columns} 
            dataSource={tableData} 
            className='h-[390px] overflow-y-auto'
            pagination={false}
            scroll={{ x: 600 }}
            rowClassName={() => 'text-sm'}
            title={() => 
            <div className='flex justify-between items-center'>
                <p className='text-[#151D48] text-lg font-semibold' > {title}  </p>
            </div>
          }
          />
    );
}

export default DataTable;

import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import {Box} from '@mui/material'
import { usePreviousUrlKeyword } from '../../../context/PrevUrlKeyword';
import {useAuth} from '../../../context/AuthContext'

const SearchTable = ({ schoolInformation }) => {
  const navigate = useNavigate();
  const {setPreviousUrlKeyword} = usePreviousUrlKeyword();
  const {user} = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(schoolInformation)
  }, [schoolInformation])


  const handleSchoolClick = (indexNumber) => {
    setPreviousUrlKeyword('school');
    navigate(`/tools/email-finder-system/school/${encodeURIComponent(indexNumber)}`);
  }

  const handleSave = async (schoolIndex) => {
    if (!user || !user.uid || !schoolIndex) return;
  
    try {
      const response = await fetch(`/api/save-school`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uid: user.uid,
          schoolIndex: schoolIndex
        }),
      });
      const data = await response.json();
  
      if (!response.ok) {
        console.log(response)
        throw new Error(data.error || 'Failed to save school') 
      }
      if (data.success) {
        setData((prevSchools) =>
          prevSchools.map((school) =>
            school.INDEX_NUMBER === schoolIndex
              ? {...school, isSaved: !school.isSaved} 
              : school
            ));
      };
      
    } catch (err) {
      console.error('Error saving school:', err.message);
    }
  };

  // Repeat of School Detail Search Table Page
  const toTitleCase = (str) => {
    if (typeof str !== 'string' || str.includes('https://') || str.includes('http://')) {
      return str
    }
    const lowerCasedStr = str.toLowerCase();
    const lowerCasedWords = lowerCasedStr.split(' ');

    const titleCasedWords = lowerCasedWords.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const titleCasedStr = titleCasedWords.join(' ');
    return titleCasedStr;
}

  const columns = useMemo(() => [
    {
      accessorKey: 'SCH_NAME',
      header: 'School Name',
      size: 150,
      Cell: ({ row }) => (
        <button
          onClick={() => handleSchoolClick(row.original.INDEX_NUMBER)}
          className="sea-blue-text text-left hover:font-underline"
        >
          {row.original.SCH_NAME}
        </button>
      ),
    },
    {
      accessorKey: 'STATENAME',
      header: 'State',
      size: 150,
      Cell: ({ cell }) => (
        <div>
          {toTitleCase(cell.getValue())}
        </div>
      )
    },
    {
      accessorKey: 'LCITY',
      header: 'City',
      size: 150,
    },
    {
      accessorKey: 'LSTREET1',
      header: 'Street',
      size: 150,
    },
    {
      accessorKey: 'isSaved',
      header: 'Saved Status',
      size: 150,
      Cell: ({ cell }) => {
        const schoolRow = cell.row.original;
        return (
        <Box
          onClick={() => handleSave(schoolRow.INDEX_NUMBER)}
          sx={{
            backgroundColor: cell.getValue() === true ? '#22c55e' : '#006fff',
            borderRadius: '0.25rem',
            color: 'black',
            maxWidth: 'fit-content',
            p: '0.5rem',
            cursor: 'pointer'
          }}
        >
          {cell.getValue() ? 'Saved': 'Not Saved'}
        </Box>
        )}
    }
  ], [navigate]);

  const table = useMaterialReactTable({
    columns,
    data,
    muiPaginationProps: {
      rowsPerPageOptions: [10, 20, 50, 100],
      variant: 'outlined',
    },
    muiTableBodyRowProps: {
      sx: {

      }
    },
    muiTableBodyCellProps: {
      sx: {

      }
    },
    muiTableHeadCellProps: {
      sx: {

      }
    },
  });

  return (
    <div className="school-table overflow-y-auto overflow-x-auto shadow-md rounded-[0.75rem]">
      <MaterialReactTable
        table={table}/>
    </div>
  )
};

export default SearchTable;
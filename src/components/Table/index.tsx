import { CloseIcon, SearchIcon } from '@styles/components/Icons';
import React, { useEffect, useRef, useState } from 'react';
import {
  DataGrid, GridRowModel, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton
} from '@mui/x-data-grid';
import {
  GridColumns,
  GridActionsCellItem,
  GridRowId
} from '@mui/x-data-grid-pro';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import Swal from 'sweetalert2';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Container } from './styles';
import { useDataContext } from '../../hooks/useDataUser';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: '0 0 10 #000',
  borderRadius: '20px'
};

const Table: React.FC = () => {
  const { values: { results: DataContext } } = useDataContext();
  const [pageSize, setPageSize] = useState<number>(5);
  const [newRows, setNewRows] = useState<typeof DataContext[]>([]);
  const [filter, setFilter] = useState('');
  const [filterRows, setFilterRows] = useState(newRows);
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<any>([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 4,
    maxColumns: 6
  });

  const CustomToolbar = () => (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );

  const handleDeleteClick = (id: GridRowId) => (event: React.MouseEvent) => {
    event.stopPropagation();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#19ca83',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'The user has been deleted.',
          'success'
        );
        setTimeout(() => {
          setNewRows(newRows.filter((row) => row.id !== id));
          if (filterRows.length !== 0) {
            setFilterRows(filterRows.filter((row) => row.id !== id));
          }
        }, 500);
      }
    });
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    if (DataContext) {
      setNewRows((lastData) => [...lastData, DataContext]);
    }
  }, [DataContext]);

  useEffect(() => {
    if (filter !== '') {
      const filteredRows = newRows.filter(
        (row) => row.fullName.toLowerCase().includes(filter.toLowerCase())
      );
      setFilterRows(filteredRows);
    } else {
      setFilterRows([]);
    }
  }, [filter]);

  const handleOpenModal = (id: GridRowId) => () => {
    const dataModal = newRows.filter((row) => row.id === id);
    setModalData(dataModal);
    handleOpen();
  };

  const processRowUpdate = async (newRow: GridRowModel) => ({ ...newRow, isNew: false });

  const columns: GridColumns = [
    {
      field: 'id', headerName: 'Id', width: 180, editable: false
    },
    {
      field: 'fullName', headerName: 'Name', width: 180, editable: false
    },
    {
      field: 'gender', headerName: 'Gender', type: 'string', width: 130, editable: false
    },
    {
      field: 'formattedDate',
      headerName: 'Birth',
      type: 'string',
      width: 150,
      editable: false
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => [
        <GridActionsCellItem
          icon={<VisibilityIcon />}
          label="Visibility"
          className="textPrimary"
          color="inherit"
          onClick={handleOpenModal(id)}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          color="inherit"
          onClick={handleDeleteClick(id)}
        />
      ]
    }
  ];

  return (
    <Container>
      <div className="form">
        <input type="text" placeholder="Searching name" className="inputSearch" ref={inputRef} onChange={handleFilter} />
        <SearchIcon />
      </div>
      <div className="table">
        <DataGrid
          rows={filterRows.length === 0 ? newRows : filterRows}
          columns={columns}
          editMode="row"
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          processRowUpdate={processRowUpdate}
          loading={loading}
          components={{ Toolbar: CustomToolbar }}
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {modalData.map((row: any) => {
            const {
              id, fullName, thumbnail, email, gender, formattedDate, phone, local, address, age
            } = row;

            let bgcolor = '#000000';

            if (gender === 'male') {
              bgcolor = '#045492';
            }
            if (gender === 'female') {
              bgcolor = '#85048D';
            }

            return (
              <section className="container">
                <div className="person" style={{ backgroundColor: bgcolor }}>
                  <button type="button" className="close">
                    <CloseIcon onClick={handleClose} />
                  </button>
                  <img src={thumbnail} alt="imgPerson" />
                  <div className="persontext">
                    <h1>{fullName}</h1>
                    <h2>{email}</h2>
                    <h3>{id}</h3>
                  </div>
                </div>
                <div className="about">
                  <div className="content age">
                    <span>Age</span>
                    <h1>{age}</h1>
                  </div>
                  <div className="content birth">
                    <span>Birth</span>
                    <h1>{formattedDate}</h1>
                  </div>
                  <div className="content gender">
                    <span>Gender</span>
                    <h1>{gender}</h1>
                  </div>
                  <div className="content phone">
                    <span>Phone</span>
                    <h1>{phone}</h1>
                  </div>
                  <div className="content address">
                    <span>Address</span>
                    <h1>{address}</h1>
                  </div>
                  <div className="content state">
                    <span>State</span>
                    <h1>{local}</h1>
                  </div>
                </div>
              </section>
            );
          })}
        </Box>
      </Modal>
    </Container>
  );
};

export default Table;

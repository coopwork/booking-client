import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'room', headerName: 'Аудитория', width: 115 },
    { field: 'lastName', headerName: 'Фамилия', width: 150 },
    { field: 'firstName', headerName: 'Имя', width: 130 },
    { field: 'date', headerName: 'Дата резервации', width: 150 },
    { field: 'time', headerName: 'Время резервации', width: 150 },
    {
        field: 'comment',
        headerName: 'Комментарий',
        description: 'Подробна причина резервации аудитории',
        sortable: false,
        width: 200
    },
    { field: 'status', headerName: 'Статус', width: 150 },
];

const rows = [
    { id: 1, status: 'Одобрено', room: 106, lastName: 'Кападзе', firstName: 'Игорь', date: '11.04.23', time: '10:00 - 12:00', comment: 'lorem ipsum 1'},
    { id: 2, status: 'Отказано', room: 222, lastName: 'Светличный', firstName: 'Руслан', date: '12.04.23', time: '11:00 - 12:00', comment: 'lorem ipsum 2'},
    { id: 3, status: 'Одобрено', room: 315, lastName: 'Алпысбай', firstName: 'Адилет', date: '13.04.23', time: '10:00 - 12:00', comment: 'lorem ipsum 3'},
    { id: 4, status: 'Одобрено', room: 405, lastName: 'Фейковый', firstName: 'Акк', date: '14.04.23', time: '12:00 - 13:00', comment: null},
    { id: 5, status: 'Отказано', room: 519, lastName: 'Кеннеди', firstName: 'Джон', date: '11.05.23', time: '10:00 - 12:00', comment: 'lorem ipsum 4'},
    { id: 6, status: null, room: 666, lastName: 'Крутой', firstName: 'Никнейм', date: '10.04.23', time: '10:00 - 12:00', comment: 'lorem ipsum 5'},
    { id: 7, status: 'Одобрено', room: 777, lastName: 'Простой', firstName: 'Пацан', date: '12.04.23', time: '14:00 - 15:00', comment: 'lorem ipsum 6'},
    { id: 8, status: 'Отказано', room: 108, lastName: 'Фамилия', firstName: 'Имя', date: '11.04.23', time: '16:00 - 17:00', comment: 'lorem ipsum 7'},
    { id: 9, status: 'Одобрено', room: 212, lastName: 'Китайская', firstName: 'Кухня', date: '15.04.23', time: '10:00 - 12:00', comment: 'lorem ipsum 8'},
    { id: 10, status: 'Одобрено', room: 211, lastName: 'Русская', firstName: 'Кухня', date: '14.04.23', time: '11:00 - 13:00', comment: 'lorem ipsum 9'},
    { id: 11, status: 'Отказано', room: 210, lastName: 'Японская', firstName: 'Кухня', date: '15.04.23', time: '12:00 - 14:00', comment: 'lorem ipsum 10'},
];

const RequestsTable = () => {
    return (
        <div style={{ width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 25, 50, 100]}
                checkboxSelection
            />
        </div>
    );
};

export default RequestsTable;
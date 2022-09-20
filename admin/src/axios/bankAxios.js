import axios from 'axios';
import swal from 'sweetalert2';

const URL = 'http://localhost:3000/api/bank';

const getDataBank = async (cb) => {
    try {
        let result = await axios({
            method: 'GET',
            url: URL
        })
        cb(result.data);
    } catch (error) {
        console.log(error);
    }
}

const createBank = async (data) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + '/create',
            data: data
        })
        swal.fire(
            'Tambah Bank',
            'Data Bank Berhasil di Tambahkan!',
            'success'
        )
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

const editBank = async (id, data) => {
    try {
        let result = await axios({
            method: 'PUT',
            url: URL + '/update/' + id,
            data: data
        })
        swal.fire(
            'Edit Bank' + id,
            `Data Bank Berhasil di Ubah`,
            'success'
        )
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

const deleteBank = async (id) => {
    try {
        swal.fire({
            title: 'Apakah kamu yakin?',
            text: "Kamu akan menghapus data ini!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus data ini!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                let result = await axios({
                    method: 'DELETE',
                    url: URL + '/delete/' + id
                })
                swal.fire(
                    'Deleted!',
                    'Data Bank berhasil di hapus!',
                    'success'
                )
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    getDataBank,
    createBank,
    editBank,
    deleteBank
}
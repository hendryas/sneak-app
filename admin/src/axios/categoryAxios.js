import axios from 'axios';
import swal from 'sweetalert2';

const URL = 'http://localhost:3000/api/category';

const getDataCategory = async (cb) => {
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

const createCategory = async (data) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + '/create',
            data: data
        })
        swal.fire(
            'Tambah Category',
            'Data Category Berhasil di Tambahkan!',
            'success'
        )
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

const editCategory = async (id, data) => {
    try {
        let result = await axios({
            method: 'PUT',
            url: URL + '/update/' + id,
            data: data
        })
        swal.fire(
            'Edit Category' + id,
            `Data Category Berhasil di Ubah`,
            'success'
        )
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

const deleteCategory = async (id) => {
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
                    'Data Category berhasil di hapus!',
                    'success'
                )
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    getDataCategory,
    createCategory,
    editCategory,
    deleteCategory
}
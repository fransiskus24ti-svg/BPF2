import { notesAPI } from "../services/notesAPI";
import { useState, useEffect } from "react";
import AlertBox from "../components/AlertBox";
import EmptyState from "../components/EmptyState";
import GenericTable from "../components/GenericTable";
import LoadingSpinner from "../components/LoadingSpinner";
import { AiFillDelete } from "react-icons/ai";

export default function Notes() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [notes, setNotes] = useState([]);
    
    const [dataForm, setDataForm] = useState({
        title: "", 
        content: "", 
        status: ""
    });

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = async () => {
        try {
            setLoading(true);
            setError("");
            const data = await notesAPI.fetchNotes();
            setNotes(data);
        } catch (err) {
            setError("Gagal memuat catatan");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError("");
            setSuccess("");

            await notesAPI.createNote(dataForm);
            setSuccess("Catatan berhasil ditambahkan!");
            setDataForm({ title: "", content: "", status: "" });

            setTimeout(() => setSuccess(""), 3000);
            await loadNotes();
            
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    // Handle untuk aksi hapus data
    const handleDelete = async (id) => {
        if (!id) {
            setError("Gagal menghapus: ID Catatan tidak ditemukan/undefined");
            return;
        }

        const konfirmasi = confirm("Yakin ingin menghapus catatan ini?");
        if (!konfirmasi) return;

        try {
            setLoading(true);
            setError("");
            setSuccess("");

            await notesAPI.deleteNote(id);

            setSuccess("Catatan berhasil dihapus!");
            setTimeout(() => setSuccess(""), 3000);

            await loadNotes();
        } catch (err) {
           setError(`Terjadi kesalahan: ${err.response?.data?.message || err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Notes App</h2>
            </div>

            {error && <AlertBox type="error">{error}</AlertBox>}
            {success && <AlertBox type="success">{success}</AlertBox>}

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Tambah Catatan Baru</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        value={dataForm.title}
                        placeholder="Judul catatan"
                        onChange={handleChange}
                        disabled={loading}
                        required
                        className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    />
                    <textarea
                        name="content"
                        value={dataForm.content}
                        placeholder="Isi catatan"
                        onChange={handleChange}
                        disabled={loading}
                        required
                        rows="3"
                        className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                    >
                        {loading ? "Mohon Tunggu..." : "Tambah Data"}
                    </button>
                </form>
            </div>

            {/* Notes Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
                <div className="px-6 py-4 border-b border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800">Daftar Catatan ({notes.length})</h3>
                </div>
              
                {loading && <LoadingSpinner text="Memuat catatan..." />}

                {!loading && notes.length === 0 && !error && <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />}
                {!loading && notes.length === 0 && error && <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />}

                {!loading && notes.length > 0 && (
                    <GenericTable
                        columns={["#", "Judul", "Isi Catatan", "Aksi"]}
                        data={notes}
                        renderRow={(note, index) => (
                            <>
                                <td className="px-6 py-4 font-medium text-gray-700">{index + 1}.</td>
                                <td className="px-6 py-4">
                                    <div className="font-semibold text-emerald-600">{note.title}</div>
                                </td>
                                <td className="px-6 py-4 max-w-xs">
                                    <div className="truncate text-gray-600">{note.content}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        /* 🛠️ PERBAIKAN UTAMA DI SINI: Mengakomodasi note._id atau note.id */
                                        onClick={() => handleDelete(note._id || note.id)}
                                        disabled={loading}
                                        className="text-red-400 hover:text-red-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                        title="Hapus catatan"
                                    >
                                        <AiFillDelete className="text-2xl" />
                                    </button>
                                </td>
                            </>
                        )}
                    />
                )}
            </div>
        </div>
    );
}
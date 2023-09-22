import Datatable from "../../components/tables/Datatable";

const View = ({ rows, columns, handleOpenCloseForm, actions }: any) => {
    return <Datatable
        title={"User List"}
        rows={rows}
        headCells={columns}
        handleOpenCloseForm={handleOpenCloseForm}
        actions={actions} />
}
export default View;
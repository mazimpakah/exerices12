import Datatable from "../../components/tables/Datatable";

const View = ({ rows, columns, handleOpenCloseCustomerForm, actions }: any) => {
    return <Datatable
        title={"Customer List"}
        rows={rows}
        headCells={columns}
        handleOpenCloseForm={handleOpenCloseCustomerForm}
        actions={actions} />;
}
export default View;
import { Table } from "../../components";

const RecipesTable = ({ getTable, dataSource }) => {
  const Columns = [
    {
      title: "Recipe Name",
      dataIndex: "recipeName",
      key: "recipeName",
      width: "200px",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: "200px",
    },
    {
      title: "Type",
      key: "type",
      align: "center",
      render: (_, record) => {
        return (
          <span
            style={{
              padding: "8px",
              borderRadius: "15px",
              background: "#1677ff",
            }}
          >
            {record?.type}
          </span>
        );
      },
    },
    {
      title: "Yields",
      dataIndex: "recipeYield",
      key: "recipeYield",
      align: "center",
      sorter: (a, b) => a.recipeYield - b.recipeYield,
    },
    {
      title: "No.of Serving",
      dataIndex: "serving",
      sorter: (a, b) => a.serving - b.serving,
      key: "serving",
      align: "center",
    },
    {
      title: "Recipe Cost",
      dataIndex: "recipeCost",
      sorter: (a, b) => a.recipeCost - b.recipeCost,
      key: "recipeCost",
      align: "center",
    },
    {
      title: "Food Cost",
      dataIndex: "foodCost",
      key: "foodCost",
      sorter: (a, b) => a.foodCost - b.foodCost,
      align: "center",
    },
    {
      title: "Food Cost",
      dataIndex: "foodCost",
      key: "foodCost",
      sorter: (a, b) => a.foodCost - b.foodCost,
      align: "center",
    },
    {
      title: "Food Cost",
      dataIndex: "foodCost",
      key: "foodCost",
      sorter: (a, b) => a.foodCost - b.foodCost,
      align: "center",
    },
    {
      title: "Food Cost",
      dataIndex: "foodCost",
      key: "foodCost",
      sorter: (a, b) => a.foodCost - b.foodCost,
      align: "center",
    },
    {
      title: "Food Cost",
      dataIndex: "foodCost",
      key: "foodCost",
      sorter: (a, b) => a.foodCost - b.foodCost,
      align: "center",
    },
    {
      title: "Food Cost",
      dataIndex: "foodCost",
      key: "foodCost",
      sorter: (a, b) => a.foodCost - b.foodCost,
      align: "center",
    },
    {
      title: "Food Cost",
      dataIndex: "foodCost",
      key: "foodCost",
      sorter: (a, b) => a.foodCost - b.foodCost,
      align: "center",
    },
  ];

  const handlePageChange = (current, pageSize) => {
    // Send a new request to the API if needed
    getTable();
  };

  return (
    <Table
      dataSource={dataSource}
      columns={Columns}
      onPaginationChange={handlePageChange}
    />
  );
};

export default RecipesTable;

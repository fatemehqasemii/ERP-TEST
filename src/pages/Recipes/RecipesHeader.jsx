import { useState } from "react";
import { Button, Col, Row } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { ComboBox, Input } from "../../components";

const RecipesHeader = ({ getTable, filters, setFilters }) => {
  const handleChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));

    // sorting data by service
    if (name === "status" || name === "categories") {
      getTable();
    }
  };

  // It must get data from the service
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  return (
    <Row gutter={[8, 8]} align="middle" justify="space-between">
      <Col>
        <h2>Recipes</h2>
      </Col>
      <Col>
        <Row gutter={[16, 16]}>
          <Col flex="auto">
            <ComboBox
              label="Categories: All"
              name={"categories"}
              options={options}
              value={filters?.categories}
              onChange={handleChange}
            />
          </Col>
          <Col flex="auto">
            <ComboBox
              label="Status: All"
              options={options}
              onChange={handleChange}
              name={"status"}
              value={filters?.status}
            />
          </Col>
          <Col flex="auto">
            <Input
              placeholder="Search"
              value={filters?.search}
              onChange={handleChange}
              suffix={<SearchOutlined />}
              name={"search"}
            />
          </Col>
          <Col flex="auto">
            <Button type="primary">
              <PlusOutlined />
              Add New Recipe
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default RecipesHeader;

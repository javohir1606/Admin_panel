import { Button, Flex, message, Table, Image, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { useDeleteData } from "../../Service/Mutation/useDeleteData";
import { useQueryClient } from "@tanstack/react-query";
import { BrandType, columnType } from "../../Types/data-types";
import { useBrandGetType } from "../../Service/Query/useBrandGetType";

export const BrandList = () => {
  const { data } = useBrandGetType();

  const dataSource = data?.results.map((item: BrandType) => {
    return {
      key: item.id,
      id: item.id,
      img: item.image,
      title: item.title,
    };
  });

  const { mutate } = useDeleteData();

  const client = useQueryClient();
  const DeleteCategory = (id: number) => {
    mutate(id, {
      onSuccess: () => {
        message.success("success");
        client.invalidateQueries({ queryKey: ["get-data"] });
      },
      onError: (error) => {
        console.log(error);

        message.error("error");
      },
    });
  };

  const columns: columnType[] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "40px",
    },
    {
      title: "Image",
      dataIndex: "img",
      align: "center",
      key: "image",
      render: (image: string) => (
        <div style={{ textAlign: "center" }}>
          <Image
            style={{
              width: "70px",
            }}
            src={image}
            alt="#"
          />
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      align: "center",
      render: (title: string) => (
        <div style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600" }}>{title}</h3>
        </div>
      ),
    },
    {
      title: "Change",
      dataIndex: "change",
      key: "action",
      align: "center",
      width: "25%",
      render: (_: any, record: BrandType) => (
        <Flex gap={"20px"} justify="center">
          <div>
            <Link to={`/app/edit-category/${record.id}`}>
              <Button
                type="primary"
                style={{ backgroundColor: "#048b04", fontSize: "20px" }}
              >
                Edit
              </Button>
            </Link>
          </div>
          <div>
            <Popconfirm
              onConfirm={() => {
                return DeleteCategory(record.id);
              }}
              cancelText={"No"}
              okText={"Yes"}
              title={"Do you wish to continue with past date?"}
            >
              <Button
                onClick={() => DeleteCategory(record.id)}
                type="primary"
                style={{ backgroundColor: "red", fontSize: "20px" }}
              >
                Delete
              </Button>
            </Popconfirm>
          </div>
        </Flex>
      ),
    },
  ];

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <Link to={"/app/create-brand"}>
          <Button type="primary">Create</Button>
        </Link>
      </div>
      <Table dataSource={dataSource} columns={columns} bordered size="large" />
    </>
  );
};

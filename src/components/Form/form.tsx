import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";
import React from "react";

import { FormDataType, qwerty } from "../../Types/data-types";

export const ReusableForm: React.FC<FormDataType> = ({
  submit,
  form,
  data,
  isLoading,
  defaultFileList,
}) => {
  const handleSubmit = (value: qwerty) => {
    if (submit) {
      submit({
        title: value.title,
        image: value.image && value?.image?.fileList[0]?.originFileObj,
      });
    }
  };

  return (
    <>
      {!isLoading && (
        <Form
          layout="vertical"
          initialValues={{ ...data }}
          onFinish={handleSubmit}
          form={form}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Title kiriting" }]}
          >
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item
            label="Image"
            name="image"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
            rules={[{ required: true, message: "Image kiriting" }]}
          >
            <Upload
              listType="picture-card"
              beforeUpload={() => false}
              accept="image/*"
              maxCount={1}
              defaultFileList={defaultFileList}
            >
              <Button type="primary" icon={<UploadOutlined />}>
                Upload
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Send
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

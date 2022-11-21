import React, { useState } from 'react';
import { Button, Spin, Upload } from 'antd';

export default function UploadFIle() {
  const [files, setFiles] = useState([]);

  return (
    <div
      style={{
        diplay: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Upload.Dragger
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture"
        accept=".png,.jpg,.jpeg"
        beforeUpload={(file) => {
          console.log({ file });
        }}
        upl
        iconRender={() => {
          return <Spin></Spin>;
        }}
      >
        <Button>Upload</Button>
      </Upload.Dragger>
    </div>
  );
}

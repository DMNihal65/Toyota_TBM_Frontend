import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { DatePicker, Button, Input, Card, Row, Col } from 'antd';
import { LeftOutlined, RightOutlined, UserOutlined, HistoryOutlined } from '@ant-design/icons';
import { Skeleton } from 'antd';
const InspectionDetails = () => {
  const { cardId } = useParams();
  const [inspectionDetails, setInspectionDetails] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch inspection details from the API
    const fetchInspectionDetails = async () => {
      try {
        const response = await axios.get(`https://172.13.45.101:8090/api/inspection/${cardId}`);
        setInspectionDetails(response.data);
      } catch (err) {
        console.error('Error fetching inspection details:', err);
        setError(true);
      }
    };

    fetchInspectionDetails();
  }, [cardId]);

  // Sample data to be used when there's an error fetching the data
  const sampleData = {
    title: `Sample Card ${cardId}`,
    description: `This is a sample description for Card ${cardId}.`,
    image: 'https://images.unsplash.com/photo-1689602037070-fec2eca3f5b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: [
      { label: 'Detail 1', value: 'Value 1' },
      { label: 'Detail 2', value: 'Value 2' },
      { label: 'Detail 3', value: 'Value 3' },
      { label: 'Detail 4', value: 'Value 4' },
      { label: 'Detail 1', value: 'Value 1' },
      { label: 'Detail 2', value: 'Value 2' },
      { label: 'Detail 3', value: 'Value 3' },
      { label: 'Detail 4', value: 'Value 4' },
    ],
  };

  const details = error ? sampleData : inspectionDetails;

  if (!details) {
    return <div>
      <Skeleton active />
    </div>;
  }

  // Check if details.details is defined and is an array before mapping
  const detailsArray = details.details && Array.isArray(details.details) ? details.details : [];

  return (
    <div className="p-4">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <DatePicker style={{ width: '100%' }} placeholder="Date Filter" />
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        <Col span={24} lg={12}>
          <Input value="JP130" disabled />
        </Col>
        <Col span={24} lg={12} className="flex justify-end">
          <Button icon={<LeftOutlined />} />
          <Button>Card 1</Button>
          <Button icon={<RightOutlined />} />
          <Button icon={<UserOutlined />}>Checked By</Button>
          <Button icon={<HistoryOutlined />}>History</Button>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        <Col span={24}>
          <Card title="Inspection Details">
            <Row gutter={[16, 16]}>
              {detailsArray.map((detail, index) => (
                <Col span={24} sm={12} md={8} lg={6} key={index}>
                  <Card>
                    <h3>{detail.label}</h3>
                    <p>{detail.value}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        <Col span={24} lg={16}>
          <Card>
            <img src={details.image} alt={details.title} style={{ width: '100%', height: 'auto' }} />
          </Card>
        </Col>
        <Col span={24} lg={8}>
          <Card>
          <div className="p-4 max-w-md mx-auto bg-white dark:bg-sky-800 rounded-lg shadow-md">
          <div className="space-y-4">
            <input type="text" className="w-full h-10 bg-sky-300  rounded-md" placeholder="Input 1" />
            <div className="grid grid-cols-3 gap-4">
              <input type="text" className="h-10 bg-sky-200 dark:bg-sky-700 rounded-md" placeholder="Input 2" />
              <input type="text" className="col-span-2 h-10 bg-sky-200 dark:bg-sky-700 rounded-md" placeholder="Input 3" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <input type="text" className="h-10 bg-sky-200 dark:bg-sky-700 rounded-md" placeholder="Input 4" />
              <input type="text" className="h-10 bg-sky-200 dark:bg-sky-700 rounded-md" placeholder="Input 5" />
              <input type="text" className="h-10 bg-sky-200 dark:bg-sky-700 rounded-md" placeholder="Input 6" />
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div>
            <div className="bg-red-500 text-white px-4 py-2 rounded-md h-24 w-24 text-center ">NG</div>
            
            </div>
            <div>
            <Button type="primary" danger style={{ width: '100%' }}>
              Submit
            </Button>
          
            </div>
            {/* <button className="bg-sky-200 dark:bg-sky-700 text-black dark:text-white px-4 py-2 rounded-md font-bold">SUBMIT</button> */}
           </div>
        </div>
            <div>
            
            </div>
            
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default InspectionDetails;

import React from 'react';
import { Card, Col,Row, Statistic } from 'antd';
import { RiseOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import './Cards.css'

import user1 from "../../../assets/images/backgrounds/ticket.png";
import user2 from "../../../assets/images/backgrounds/image.png";
import user3 from "../../../assets/images/backgrounds/increase.png";

const BlogCard = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Total Sold Tickets" hoverable bordered={false} className='Cards'>
      <img src={user1} alt="img" width="20%"/>
      <Statistic className='statistics'
          value={150}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<RiseOutlined />}
        />
      </Card>
    </Col>
    <Col span={8}>
      <Card title="New Gym Goers" hoverable bordered={false}>
      <img src={user2} alt="img" width="20%"/>
      <Statistic className='statistics'
          value={150}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<UsergroupAddOutlined />}
        />
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Total Sales" hoverable bordered={false} >
      <img src={user3} alt="img" width="20%"/>
      <Statistic className='statistics'
          value={150}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<RiseOutlined/>}dsdsdsds
        />
      </Card>
    </Col>
  </Row>
);
export default BlogCard;
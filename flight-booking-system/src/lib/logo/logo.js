// import React from "react"
// import {TbPlaneDeparture} from '@ant-design/icons';

// export const Logo = (props) => {
//     return (
//         <TbPlaneDeparture style={{fontSize: '2rem', color: '#fff'}} />
//     )
// }

import React from 'react';
import ReactDOM from 'react-dom/client';
import Icon from '@ant-design/icons';
import './styles.css';
import Logo from './logo.svg'; // path to your '*.svg' file.
// in create-react-app:
// import { ReactComponent as MessageSvg } from 'path/to/message.svg';

ReactDOM.createRoot(mountNode).render(<Icon component={Logo} />);
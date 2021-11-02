import {UpCircleOutlined,VerifiedOutlined,PlayCircleOutlined} from '@ant-design/icons'
export const navList = [ 
    
    {
        name:'Store',
        navTo:'/'
    },
    {
        name:'Mac',
        navTo:'/mac'
    },
    {
        name:'iPad',
        navTo:'/ipad'
    },
 ]

 export const secondList=  
      {
    mac:[{
       name:<UpCircleOutlined style={{ fontSize: '50px',  }}/>,
       navTo:'/',
       title:'MacBook Air'
   },
   {
    name:<VerifiedOutlined style={{ fontSize: '50px',  }}/>,
    navTo:'/',
    title:'MacBook Pro'
}],
   ipad:[{
       name: <PlayCircleOutlined style={{ fontSize: '50px',  }}/>,
       navTo:'/',
       title:'iPad Pro'
   }]}
 
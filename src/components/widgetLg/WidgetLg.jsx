import "./WidgetLg.css";

export default function WidgetLg() {

  const Button = ({type}) => {
    return <button className={"widgetLgButton  " + type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/1526804/pexels-photo-1526804.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Anthony</span>
          </td>
          <td className="widgetLgDate">26 2 2018</td>
          <td className="widgetLgAmount">$156.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
            </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Santhiya</span>
          </td>
          <td className="widgetLgDate">26 2 2018</td>
          <td className="widgetLgAmount">$156.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
            </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/1526844/pexels-photo-1526844.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Jeni</span>
          </td>
          <td className="widgetLgDate">26 2 2018</td>
          <td className="widgetLgAmount">$156.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
            </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/1526804/pexels-photo-1526804.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Naveen</span>
          </td>
          <td className="widgetLgDate">26 2 2018</td>
          <td className="widgetLgAmount">$156.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
            </td>
        </tr>
      </table>
    </div>
  )
}

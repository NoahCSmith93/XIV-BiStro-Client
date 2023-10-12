import { Table } from 'react-bootstrap'

export default function BestTable({ table }) {
    console.log("This is the table passed in", table)

    return (
        <Table bordered variant='dark'>
                    <thead>
                        <tr>
                            <th>Slot</th>
                            <th>iLvl</th>
                            <th colSpan={2}>Item Name</th>
                            <th>&nbsp;</th>
                            <th colSpan={2}>Item Name</th>
                            <th>iLvl</th>
                            <th>Slot</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Weapon</td>
                            <td>{table.weapon.ilvl}</td>
                            <td colSpan={2}>{table.weapon.name}</td>
                            <td>&nbsp;</td>
                            <td colSpan={2}>{table.offhand.name}</td>
                            <td>{table.offhand.ilvl}</td>
                            <td>Offhand</td>
                        </tr>
                        <tr>
                            <td>Head</td>
                            <td>{table.head.ilvl}</td>
                            <td colSpan={2}>{table.head.name}</td>
                            <td>&nbsp;</td>
                            <td colSpan={2}>{table.earing.name}</td>
                            <td>{table.earing.ilvl}</td>
                            <td>Earing</td>
                        </tr>
                        <tr>
                            <td>Body</td>
                            <td>{table.chest.ilvl}</td>
                            <td colSpan={2}>{table.chest.name}</td>
                            <td>&nbsp;</td>
                            <td colSpan={2}>{table.neck.name}</td>
                            <td>{table.neck.ilvl}</td>
                            <td>Neck</td>
                        </tr>
                        <tr>
                            <td>Arms</td>
                            <td>{table.arms.ilvl}</td>
                            <td colSpan={2}>{table.arms.name}</td>
                            <td>&nbsp;</td>
                            <td colSpan={2}>{table.wrist.name}</td>
                            <td>{table.wrist.ilvl}</td>
                            <td>Wrist</td>
                        </tr>
                        <tr>
                            <td>Legs</td>
                            <td>{table.legs.ilvl}</td>
                            <td colSpan={2}>{table.legs.name}</td>
                            <td>&nbsp;</td>
                            <td colSpan={2}>{table.ring1.name}</td>
                            <td>{table.ring1.ilvl}</td>
                            <td>Ring 1</td>
                        </tr>
                        <tr>
                            <td>Feet</td>
                            <td>{table.feet.ilvl}</td>
                            <td colSpan={2}>{table.feet.name}</td>
                            <td>&nbsp;</td>
                            <td colSpan={2}>{table.ring2.name}</td>
                            <td>{table.ring2.ilvl}</td>
                            <td>Ring 2</td>
                        </tr>
                    </tbody>
                </Table>
    )
}
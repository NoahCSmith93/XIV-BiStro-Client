import { Form, Button, Container, Table } from 'react-bootstrap'
import { useState } from 'react'

export default function BestForm({ table, handleSubmit, handleChange, gearset }) {

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
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
                            <td><Form.Control
                                type='number'
                                name={`${gearset}.weapon.ilvl`}
                                value={table.weapon.ilvl}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td colSpan={2}><Form.Control
                                type='text'
                                name={`${gearset}.weapon.name`}
                                value={table.weapon.name}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td>&nbsp;</td>
                            <td colSpan={2}><Form.Control
                                type='text'
                                name={`${gearset}.offhand.name`}
                                value={table.offhand.name}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td><Form.Control
                                type='number'
                                name={`${gearset}.offhand.ilvl`}
                                value={table.offhand.ilvl}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td>Offhand</td>
                        </tr>
                        <tr>
                            <td>Head</td>
                            <td><Form.Control
                                type='number'
                                name={`${gearset}.head.ilvl`}
                                value={table.head.ilvl}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td colSpan={2}><Form.Control
                                type='text'
                                name={`${gearset}.head.name`}
                                value={table.head.name}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td>&nbsp;</td>
                            <td colSpan={2}><Form.Control
                                type='text'
                                name={`${gearset}.earing.name`}
                                value={table.earing.name}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td><Form.Control
                                type='number'
                                name={`${gearset}.earing.ilvl`}
                                value={table.earing.ilvl}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td>Earing</td>
                        </tr>
                        <tr>
                            <td>Body</td>
                            <td><Form.Control
                                type='number'
                                name={`${gearset}.chest.ilvl`}
                                value={table.chest.ilvl}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td colSpan={2}><Form.Control
                                type='text'
                                name={`${gearset}.chest.name`}
                                value={table.chest.name}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td>&nbsp;</td>
                            <td colSpan={2}><Form.Control
                                type='text'
                                name={`${gearset}.neck.name`}
                                value={table.neck.name}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td><Form.Control
                                type='number'
                                name={`${gearset}.neck.ilvl`}
                                value={table.neck.ilvl}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td>Neck</td>
                        </tr>
                        <tr>
                            <td>Arms</td>
                            <td><Form.Control
                                type='number'
                                name={`${gearset}.arms.ilvl`}
                                value={table.arms.ilvl}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td colSpan={2}><Form.Control
                                type='text'
                                name={`${gearset}.arms.name`}
                                value={table.arms.name}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td>&nbsp;</td>
                            <td colSpan={2}><Form.Control
                                type='text'
                                name={`${gearset}.wrist.name`}
                                value={table.wrist.name}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td><Form.Control
                                type='number'
                                name={`${gearset}.wrist.ilvl`}
                                value={table.wrist.ilvl}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td>Wrist</td>
                        </tr>
                        <tr>
                            <td>Legs</td>
                            <td><Form.Control
                                type='number'
                                name={`${gearset}.legs.ilvl`}
                                value={table.legs.ilvl}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td colSpan={2}><Form.Control
                                type='text'
                                name={`${gearset}.legs.name`}
                                value={table.legs.name}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td>&nbsp;</td>
                            <td colSpan={2}><Form.Control
                                type='text'
                                name={`${gearset}.ring1.name`}
                                value={table.ring1.name}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td><Form.Control
                                type='number'
                                name={`${gearset}.ring1.ilvl`}
                                value={table.ring1.ilvl}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td>Ring 1</td>
                        </tr>
                        <tr>
                            <td>Feet</td>
                            <td><Form.Control
                                type='number'
                                name={`${gearset}.feet.ilvl`}
                                value={table.feet.ilvl}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td colSpan={2}><Form.Control
                                type='text'
                                name={`${gearset}.feet.name`}
                                value={table.feet.name}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td>&nbsp;</td>
                            <td colSpan={2}><Form.Control
                                type='text'
                                name={`${gearset}.ring2.name`}
                                value={table.ring2.name}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td><Form.Control
                                type='number'
                                name={`${gearset}.ring2.ilvl`}
                                value={table.ring2.ilvl}
                                onChange={handleChange}
                                className='bg-dark'
                                style={{color: 'white'}}
                            /></td>
                            <td>Ring 2</td>
                        </tr>
                    </tbody>
                </Table>
                <Button type='submit'>Update</Button>
            </Form>
        </Container>
    )
}
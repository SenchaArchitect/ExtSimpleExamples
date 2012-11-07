/*
 * File: app/model/Plant.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('EditableGrid.model.Plant', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'common',
            type: 'string'
        },
        {
            name: 'botanical',
            type: 'string'
        },
        {
            name: 'light'
        },
        {
            name: 'price',
            type: 'float'
        },
        {
            name: 'availDate',
            dateFormat: 'm/d/Y',
            mapping: 'availability',
            type: 'date'
        },
        {
            name: 'indoor',
            type: 'boolean'
        }
    ]
});
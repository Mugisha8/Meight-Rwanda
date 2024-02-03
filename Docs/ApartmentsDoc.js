/**
 * @swagger
 * definitions:
 *   Apartment:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *         description: Apartment name
 *       location:
 *         type: string
 *         description: Apartment location
 *       price:
 *         type: number
 *         description: Apartment price
 *       photo:
 *         type: string
 *         description: URL of the apartment photo
 *
 *   ErrorResponse:
 *     type: object
 *     properties:
 *       status:
 *         type: string
 *         description: HTTP status code
 *       message:
 *         type: string
 *         description: Error message
 *
 *   SuccessResponse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *         description: Success message
 *       data:
 *         $ref: '#/definitions/Apartment'
 */

/**
 * @swagger
 * /apartments:
 *   post:
 *     summary: Create a new apartment
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Apartment data
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Apartment'
 *     responses:
 *       200:
 *         description: Apartment created successfully
 *         schema:
 *           $ref: '#/definitions/SuccessResponse'
 *       400:
 *         description: Apartment name already exists
 *         schema:
 *           $ref: '#/definitions/ErrorResponse'
 */

/**
 * @swagger
 * /apartments:
 *   get:
 *     summary: Get all apartments
 *     responses:
 *       200:
 *         description: List of apartments
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Apartment'
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           $ref: '#/definitions/ErrorResponse'
 */

/**
 * @swagger
 * /apartments/{id}:
 *   get:
 *     summary: Get apartment by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the apartment
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Apartment details
 *         schema:
 *           $ref: '#/definitions/Apartment'
 *       404:
 *         description: Apartment not found
 *         schema:
 *           $ref: '#/definitions/ErrorResponse'
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           $ref: '#/definitions/ErrorResponse'
 */

/**
 * @swagger
 * /apartments/{id}:
 *   put:
 *     summary: Update apartment by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the apartment
 *         required: true
 *         type: string
 *       - in: body
 *         name: body
 *         description: Updated apartment data
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Apartment'
 *     responses:
 *       200:
 *         description: Apartment updated successfully
 *         schema:
 *           $ref: '#/definitions/SuccessResponse'
 *       404:
 *         description: Apartment not found
 *         schema:
 *           $ref: '#/definitions/ErrorResponse'
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           $ref: '#/definitions/ErrorResponse'
 */

/**
 * @swagger
 * /apartments/{id}:
 *   delete:
 *     summary: Delete apartment by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the apartment
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Apartment deleted successfully
 *         schema:
 *           $ref: '#/definitions/SuccessResponse'
 *       404:
 *         description: Apartment not found
 *         schema:
 *           $ref: '#/definitions/ErrorResponse'
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           $ref: '#/definitions/ErrorResponse'
 */

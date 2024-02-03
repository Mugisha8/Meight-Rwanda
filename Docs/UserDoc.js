/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *         lastname:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         role:
 *           type: string
 */

/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: Sign up a new user
 *     tags: [Users]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Account created successfully
 *         content:
 *           application/json:
 *             example:
 *               status: "200"
 *               message: "Account created Successfully"
 *               data: {}
 *       400:
 *         description: Missing fields, invalid email, or email already exists
 *         content:
 *           application/json:
 *             example:
 *               status: "400"
 *               message: "Invalid Email" or "Missing field" or "Email Already Exists"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               status: "500"
 *               message: "Internal Server Error"
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: User login
 *     tags: [Users]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Logged in successfully
 *         content:
 *           application/json:
 *             example:
 *               status: "200"
 *               message: "Logged In successfully"
 *               Users: {}
 *               Token: "example_token"
 *       400:
 *         description: Missing fields, invalid email format, user not found, or incorrect password
 *         content:
 *           application/json:
 *             example:
 *               status: "400"
 *               message: "Please Fill the Missing Fields" or "Invalid Email Format" or "USER not Found" or "Incorrect Password"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               status: "500"
 *               message: "Internal Server Error"
 */

/**
 * @swagger
 * /users/fetch:
 *   get:
 *     summary: Fetch all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Users retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               status: "200"
 *               Message: "User retrieved Successfully"
 *               UserInfo: []
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               status: "500"
 *               message: "Internal Server Error"
 */

/**
 * @swagger
 * /users/delete/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               status: "200"
 *               message: "User Deleted Successfully"
 *       400:
 *         description: Invalid User ID
 *         content:
 *           application/json:
 *             example:
 *               status: "400"
 *               message: "Invalid User ID {id}"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               status: "500"
 *               message: "Internal Server Error"
 */

/**
 * @swagger
 * /users/update/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             example:
 *               status: "200"
 *               message: "User Updated"
 *               Data: {}
 *       400:
 *         description: Invalid ID
 *         content:
 *           application/json:
 *             example:
 *               status: "400"
 *               message: "Invalid Id {id}"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               status: "500"
 *               message: "Internal Server Error"
 */

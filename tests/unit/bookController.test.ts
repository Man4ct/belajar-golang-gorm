import { Request, Response } from 'express';
import {
  createBook,
} from '../../src/controllers/bookController';
// import  {mockBookData, mockBookRequest}  from '../../__mocks__/book';

import Book from '../../src/models/book';
jest.mock('../../src/models/book');



  const mockBookRequest = {
    isbn: '9780743273564',
    title: 'Mock Book',
    language: 'English',
    totalCopy: 1,
    shelfId: 1,
    categoryId: 1,
    description: 'Mock description',
  };

const mockBookData = {
    ...mockBookRequest,
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  };

describe('createBook', () => {
  test('should create a new book based on valid request body given', async () => {

    const req = {
      body: mockBookRequest,
    } as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    (Book.findOne as jest.Mock).mockResolvedValue(null);

    (Book.create as jest.Mock).mockResolvedValue(mockBookData);

    // Call the controller function
    await createBook(req, res);

    // Assert that the response status and json methods were called with the expected values
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        id: mockBookData.id,
        isbn: mockBookData.isbn,
        title: mockBookData.title,
        language: mockBookData.language,
        totalCopy: mockBookData.totalCopy,
        shelfId: mockBookData.shelfId,
        categoryId: mockBookData.categoryId,
        description: mockBookData.description,
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
        deletedAt: mockBookData.deletedAt,
      })
    );
  });
  // test('should return 400 if book with the same ISBN already exists', async () => {
  //   // Mock request object with the necessary properties for creating a book
  //   const req = {
  //     body: mockBookRequest,
  //   } as Request;

  //   // Mock response object with status and json methods
  //   const res = {
  //     status: jest.fn().mockReturnThis(),
  //     json: jest.fn(),
  //   } as unknown as Response;

  //   // Mock the behavior of Book.findOne to simulate an existing book with the same ISBN
  //   (Book.findOne as jest.Mock).mockResolvedValue(mockBookData);

  //   // Call the controller function
  //   await createBook(req, res);

  //   // Assert that the response status and json methods were called with the expected values
  //   expect(res.status).toHaveBeenCalledWith(400);
  //   expect(res.json).toHaveBeenCalledWith({
  //     error: 'Book with the same ISBN already exists',
  //   });

  // })
});

// describe('updateBook', () => {
//   test('should update an existing book', async () => {
//     const req = { params: { id: 1 }, body: mockBookRequest } as unknown as Request;
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     } as unknown as Response;

//     (Book.findOne as jest.Mock).mockResolvedValue(mockBookData);
//     (Book.create as jest.Mock).mockResolvedValue(mockBookData);

//     await updateBook(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith(
//       expect.objectContaining({
//         id: mockBookData.id,
//         isbn: mockBookData.isbn,
//         title: mockBookData.title,
//         language: mockBookData.language,
//         totalCopy: mockBookData.totalCopy,
//         shelfId: mockBookData.shelfId,
//         categoryId: mockBookData.categoryId,
//         description: mockBookData.description,
//         createdAt: expect.any(Date),
//         updatedAt: expect.any(Date),
//         deletedAt: mockBookData.deletedAt,
//       })
//     );
//   });

//   test('should return 404 if book with the given ID is not found', async () => {
//     const req = { params: { id: 1 }, body: mockBookRequest } as unknown as Request;
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     } as unknown as Response;

//     (Book.findOne as jest.Mock).mockResolvedValue(null);

//     await updateBook(req, res);

//     expect(res.status).toHaveBeenCalledWith(404);
//     expect(res.json).toHaveBeenCalledWith({ error: 'Book not found' });
//   });
// });
// describe('updateBook', () => {
//     test('should update an existing book', async () => {
//       const req = { params: { id: /* provide valid book ID */ }, body: { /* provide valid book data to update */ } } as Request;
//       const res = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn(),
//       } as unknown as Response;

//       await updateBook(req, res);

//       expect(res.status).toHaveBeenCalledWith(200);
//       expect(res.json).toHaveBeenCalledWith(expect.any(Object));
//     });

//     // Add more test cases for edge cases, validation, error handling, etc.
//   });

// describe('getAllBooks', () => {
//     test('should get all books', async () => {
//       const res = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn(),
//       } as unknown as Response;

//       await getAllBooks(res);

//       expect(res.status).toHaveBeenCalledWith(200);
//       expect(res.json).toHaveBeenCalledWith(expect.any(Array));
//     });

//     // Add more test cases for edge cases, error handling, etc.
//   });

// describe('getBookById', () => {
//     test('should get a book by ID', async () => {
//       const req = { params: { id: 1 } } as Request;
//       const res = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn(),
//       } as unknown as Response;

//       await getBookById(req, res);

//       expect(res.status).toHaveBeenCalledWith(200);
//       expect(res.json).toHaveBeenCalledWith(expect.any(Object));
//     });

//     // Add more test cases for edge cases, error handling, etc.
//   });

// describe('deleteBook', () => {
//     test('should delete a book by ID', async () => {
//       const req = { params: { id: /* provide valid book ID */ } } as Request;
//       const res = {
//         status: jest.fn().mockReturnThis(),
//         send: jest.fn(),
//       } as unknown as Response;

//       await deleteBook(req, res);

//       expect(res.status).toHaveBeenCalledWith(204);
//       expect(res.send).toHaveBeenCalled();
//     });

//     // Add more test cases for edge cases, error handling, etc.
//   });
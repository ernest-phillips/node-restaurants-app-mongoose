<<<<<<< HEAD
"use strict";
exports.DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost/restaurants-app";
exports.TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL || "mongodb://localhost/test-restaurants-app";
exports.PORT = process.env.PORT || 8080;
=======
'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/restaurants-app';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-restaurants-app';
exports.PORT = process.env.PORT || 8080;
>>>>>>> feature/with-tests

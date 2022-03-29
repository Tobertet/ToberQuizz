import "@testing-library/jest-dom";

import { config } from "@vue/test-utils";
import { i18n } from "@/i18n";

import { server } from "@/mocks/server";

config.global.plugins = [i18n];

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

-- CreateTable
CREATE TABLE "Specialities" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "icon" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Specialities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Specialities_title_key" ON "Specialities"("title");

-- CreateIndex
CREATE INDEX "idx_specialty_isDeleted" ON "Specialities"("isDeleted");

-- CreateIndex
CREATE INDEX "idx_specialty_title" ON "Specialities"("title");

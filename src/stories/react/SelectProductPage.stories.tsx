import type { Meta, StoryObj } from "@storybook/react";
import {
  Page,
  Layout,
  Card,
  Button,
  Badge,
  Thumbnail,
  Text,
  BlockStack,
  InlineStack,
  Box,
  Divider,
  Filters,
  ResourceList,
  ProgressBar,
} from "@shopify/polaris";
import { XIcon } from "@shopify/polaris-icons";
import React from "react";

const meta: Meta = {
  title: "Polaris/Prototypes/SelectProductPage",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

// Mock product data
const mockProducts = [
  {
    id: "1",
    name: "Classic Cotton T-Shirt",
    price: "$19.99",
    status: "Active",
    image: "https://burst.shopifycdn.com/photos/black-t-shirt.jpg",
    type: "Apparel",
    vendor: "Cotton Co",
  },
  {
    id: "2",
    name: "Denim Jeans - Blue",
    price: "$49.99",
    status: "Active",
    image: "https://burst.shopifycdn.com/photos/flatlay-iron-jeans.jpg",
    type: "Apparel",
    vendor: "Denim Works",
  },
  {
    id: "3",
    name: "Leather Sneakers",
    price: "$79.99",
    status: "Active",
    image: "https://burst.shopifycdn.com/photos/white-sneakers.jpg",
    type: "Footwear",
    vendor: "Shoe Brand",
  },
  {
    id: "4",
    name: "Wool Winter Hat",
    price: "$24.99",
    status: "Active",
    image: "https://burst.shopifycdn.com/photos/person-holds-a-warm-wooly-hat.jpg",
    type: "Accessories",
    vendor: "Winter Wear",
  },
  {
    id: "5",
    name: "Canvas Tote Bag",
    price: "$34.99",
    status: "Active",
    image: "https://burst.shopifycdn.com/photos/tote-bag.jpg",
    type: "Accessories",
    vendor: "Bag Co",
  },
];

interface SelectedProduct {
  id: string;
  name: string;
  image: string;
  price: string;
}

export const BasicUsage: Story = {
  render: () => {
    const [searchValue, setSearchValue] = React.useState("");
    const [selectedProducts, setSelectedProducts] = React.useState<
      SelectedProduct[]
    >([]);
    const [statusFilter, setStatusFilter] = React.useState<string[]>([]);

    const handleSearchChange = (value: string) => setSearchValue(value);

    const handleClearAll = () => {
      setSearchValue("");
      setStatusFilter([]);
    };

    const toggleProductSelection = (product: typeof mockProducts[0]) => {
      const isSelected = selectedProducts.some((p) => p.id === product.id);
      if (isSelected) {
        setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
      } else {
        setSelectedProducts([
          ...selectedProducts,
          {
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
          },
        ]);
      }
    };

    const removeProduct = (productId: string) => {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== productId));
    };

    const filters = [
      {
        key: "status",
        label: "Status",
        filter: (
          <div style={{ padding: "8px" }}>
            <Text as="p" variant="bodyMd">
              Filter by status
            </Text>
          </div>
        ),
        shortcut: true,
      },
      {
        key: "type",
        label: "Product type",
        filter: (
          <div style={{ padding: "8px" }}>
            <Text as="p" variant="bodyMd">
              Filter by type
            </Text>
          </div>
        ),
        shortcut: true,
      },
    ];

    const appliedFilters: any[] = [];
    if (statusFilter.length > 0) {
      appliedFilters.push({
        key: "status",
        label: `Status: ${statusFilter.join(", ")}`,
        onRemove: () => setStatusFilter([]),
      });
    }

    const filterControl = (
      <Filters
        queryValue={searchValue}
        queryPlaceholder="Search products"
        filters={filters}
        appliedFilters={appliedFilters}
        onQueryChange={handleSearchChange}
        onQueryClear={() => setSearchValue("")}
        onClearAll={handleClearAll}
      />
    );

    const filteredProducts = mockProducts.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <Page
        title="Select product"
        subtitle="Select one or more products that you want to test. Use the search bar below to search for a specific product."
        backAction={{ content: "Settings", url: "#" }}
      >
        <Box paddingBlockEnd="400">
          <Card>
            <Box padding="400">
              <BlockStack gap="200">
                <Text as="h3" variant="headingSm">
                  Progress: Step 1 of 4
                </Text>
                <ProgressBar progress={25} size="small" />
                <InlineStack gap="200" wrap={false}>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Select product
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    →
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Split your traffic
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    →
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Set your price
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    →
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Final preview
                  </Text>
                </InlineStack>
              </BlockStack>
            </Box>
          </Card>
        </Box>

        <Layout>
          <Layout.Section variant="oneThird">
            <Card padding="0">
              <Box padding="400">
                <BlockStack gap="400">
                  <Text as="h2" variant="headingMd">
                    Selected products
                  </Text>
                  {selectedProducts.length === 0 ? (
                    <Box
                      padding="400"
                      background="bg-surface-secondary"
                      borderRadius="200"
                    >
                      <Text as="p" variant="bodySm" tone="subdued" alignment="center">
                        No products selected yet
                      </Text>
                    </Box>
                  ) : (
                    <BlockStack gap="300">
                      {selectedProducts.map((product) => (
                        <Card key={product.id}>
                          <Box padding="300">
                            <InlineStack gap="300" align="space-between" blockAlign="center">
                              <InlineStack gap="300" blockAlign="center">
                                <Thumbnail
                                  source={product.image}
                                  alt={product.name}
                                  size="small"
                                />
                                <BlockStack gap="100">
                                  <Text as="p" variant="bodySm" fontWeight="semibold">
                                    {product.name}
                                  </Text>
                                  <Text as="p" variant="bodySm" tone="subdued">
                                    {product.price}
                                  </Text>
                                </BlockStack>
                              </InlineStack>
                              <Button
                                icon={XIcon}
                                variant="plain"
                                onClick={() => removeProduct(product.id)}
                                accessibilityLabel={`Remove ${product.name}`}
                              />
                            </InlineStack>
                          </Box>
                        </Card>
                      ))}
                    </BlockStack>
                  )}
                </BlockStack>
              </Box>
            </Card>

            <Box paddingBlockStart="400">
              <InlineStack gap="300" align="end">
                <Button>Save</Button>
                <Button variant="primary" disabled={selectedProducts.length === 0}>
                  Next
                </Button>
              </InlineStack>
            </Box>
          </Layout.Section>

          <Layout.Section>
            <Card padding="0">
              <Box padding="400">{filterControl}</Box>
              <Divider />
              <ResourceList
                resourceName={{ singular: "product", plural: "products" }}
                items={filteredProducts}
                renderItem={(item) => {
                  const isSelected = selectedProducts.some(
                    (p) => p.id === item.id
                  );
                  return (
                    <ResourceList.Item
                      id={item.id}
                      onClick={() => toggleProductSelection(item)}
                      verticalAlignment="center"
                      media={
                        <Thumbnail source={item.image} alt={item.name} />
                      }
                    >
                      <InlineStack gap="400" blockAlign="center" wrap={false}>
                        <Box minWidth="40px">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleProductSelection(item)}
                            style={{ width: "16px", height: "16px" }}
                          />
                        </Box>
                        <BlockStack gap="100">
                          <Text as="h3" variant="bodyMd" fontWeight="semibold">
                            {item.name}
                          </Text>
                          <InlineStack gap="200">
                            <Text as="p" variant="bodySm" tone="subdued">
                              {item.price}
                            </Text>
                            <Text as="p" variant="bodySm" tone="subdued">
                              •
                            </Text>
                            <Badge tone="success">{item.status}</Badge>
                          </InlineStack>
                        </BlockStack>
                      </InlineStack>
                    </ResourceList.Item>
                  );
                }}
              />
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  },
};

export const WithSelectedItems: Story = {
  render: () => {
    const [searchValue, setSearchValue] = React.useState("");
    const [selectedProducts, setSelectedProducts] = React.useState<
      SelectedProduct[]
    >([
      {
        id: "1",
        name: "Classic Cotton T-Shirt",
        image: "https://burst.shopifycdn.com/photos/black-t-shirt.jpg",
        price: "$19.99",
      },
      {
        id: "3",
        name: "Leather Sneakers",
        image: "https://burst.shopifycdn.com/photos/white-sneakers.jpg",
        price: "$79.99",
      },
    ]);
    const [statusFilter, setStatusFilter] = React.useState<string[]>([]);

    const handleSearchChange = (value: string) => setSearchValue(value);

    const handleClearAll = () => {
      setSearchValue("");
      setStatusFilter([]);
    };

    const toggleProductSelection = (product: typeof mockProducts[0]) => {
      const isSelected = selectedProducts.some((p) => p.id === product.id);
      if (isSelected) {
        setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
      } else {
        setSelectedProducts([
          ...selectedProducts,
          {
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
          },
        ]);
      }
    };

    const removeProduct = (productId: string) => {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== productId));
    };

    const filters = [
      {
        key: "status",
        label: "Status",
        filter: (
          <div style={{ padding: "8px" }}>
            <Text as="p" variant="bodyMd">
              Filter by status
            </Text>
          </div>
        ),
        shortcut: true,
      },
      {
        key: "type",
        label: "Product type",
        filter: (
          <div style={{ padding: "8px" }}>
            <Text as="p" variant="bodyMd">
              Filter by type
            </Text>
          </div>
        ),
        shortcut: true,
      },
    ];

    const appliedFilters: any[] = [];
    if (statusFilter.length > 0) {
      appliedFilters.push({
        key: "status",
        label: `Status: ${statusFilter.join(", ")}`,
        onRemove: () => setStatusFilter([]),
      });
    }

    const filterControl = (
      <Filters
        queryValue={searchValue}
        queryPlaceholder="Search products"
        filters={filters}
        appliedFilters={appliedFilters}
        onQueryChange={handleSearchChange}
        onQueryClear={() => setSearchValue("")}
        onClearAll={handleClearAll}
      />
    );

    const filteredProducts = mockProducts.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <Page
        title="Select product"
        subtitle="Select one or more products that you want to test. Use the search bar below to search for a specific product."
        backAction={{ content: "Settings", url: "#" }}
      >
        <Box paddingBlockEnd="400">
          <Card>
            <Box padding="400">
              <BlockStack gap="200">
                <Text as="h3" variant="headingSm">
                  Progress: Step 1 of 4
                </Text>
                <ProgressBar progress={25} size="small" />
                <InlineStack gap="200" wrap={false}>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Select product
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    →
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Split your traffic
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    →
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Set your price
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    →
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Final preview
                  </Text>
                </InlineStack>
              </BlockStack>
            </Box>
          </Card>
        </Box>

        <Layout>
          <Layout.Section variant="oneThird">
            <Card padding="0">
              <Box padding="400">
                <BlockStack gap="400">
                  <Text as="h2" variant="headingMd">
                    Selected products
                  </Text>
                  <BlockStack gap="300">
                    {selectedProducts.map((product) => (
                      <Card key={product.id}>
                        <Box padding="300">
                          <InlineStack gap="300" align="space-between" blockAlign="center">
                            <InlineStack gap="300" blockAlign="center">
                              <Thumbnail
                                source={product.image}
                                alt={product.name}
                                size="small"
                              />
                              <BlockStack gap="100">
                                <Text as="p" variant="bodySm" fontWeight="semibold">
                                  {product.name}
                                </Text>
                                <Text as="p" variant="bodySm" tone="subdued">
                                  {product.price}
                                </Text>
                              </BlockStack>
                            </InlineStack>
                            <Button
                              icon={XIcon}
                              variant="plain"
                              onClick={() => removeProduct(product.id)}
                              accessibilityLabel={`Remove ${product.name}`}
                            />
                          </InlineStack>
                        </Box>
                      </Card>
                    ))}
                  </BlockStack>
                </BlockStack>
              </Box>
            </Card>

            <Box paddingBlockStart="400">
              <InlineStack gap="300" align="end">
                <Button>Save</Button>
                <Button variant="primary">Next</Button>
              </InlineStack>
            </Box>
          </Layout.Section>

          <Layout.Section>
            <Card padding="0">
              <Box padding="400">{filterControl}</Box>
              <Divider />
              <ResourceList
                resourceName={{ singular: "product", plural: "products" }}
                items={filteredProducts}
                renderItem={(item) => {
                  const isSelected = selectedProducts.some(
                    (p) => p.id === item.id
                  );
                  return (
                    <ResourceList.Item
                      id={item.id}
                      onClick={() => toggleProductSelection(item)}
                      verticalAlignment="center"
                      media={
                        <Thumbnail source={item.image} alt={item.name} />
                      }
                    >
                      <InlineStack gap="400" blockAlign="center" wrap={false}>
                        <Box minWidth="40px">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleProductSelection(item)}
                            style={{ width: "16px", height: "16px" }}
                          />
                        </Box>
                        <BlockStack gap="100">
                          <Text as="h3" variant="bodyMd" fontWeight="semibold">
                            {item.name}
                          </Text>
                          <InlineStack gap="200">
                            <Text as="p" variant="bodySm" tone="subdued">
                              {item.price}
                            </Text>
                            <Text as="p" variant="bodySm" tone="subdued">
                              •
                            </Text>
                            <Badge tone="success">{item.status}</Badge>
                          </InlineStack>
                        </BlockStack>
                      </InlineStack>
                    </ResourceList.Item>
                  );
                }}
              />
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  },
};

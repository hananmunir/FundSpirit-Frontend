import React, { useEffect, useState, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CampaignHeader from "../Components/Campaign/SearchContainer";
import dynamic from "next/dynamic";
import { DummyOrganizations } from "../constants/DummyData/Organization";
import { getOrganization } from "../Web3/Organizations";
import { fetchAllNPOs } from "../Api/NPOs";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Loader from "../Components/Loader/Loader";
const DynamicNpoCard = dynamic(() => import("../Components/Npo/NpoCard"), {
  ssr: true,
});

export default function NPOs() {
  const [organizations, setOrganizations] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOrganizations, setFilteredOrganizations] = useState([]);
  const [searched, setSearched] = useState(false);
  const state = useSelector((state) => state.user.npo.loggedIn);

  if (state) {
    router.push("/");
  }

  useEffect(() => {
    fetchAllNPOs()
      .then((res) => {
        setOrganizations(res.data);
        setFilteredOrganizations(res.data);
      })
      .catch((err) => console.log("Error"));
  }, []);

  useEffect(() => {}, []);

  const handleSearch = (e) => {
    if (organizations) {
      setFilteredOrganizations(
        organizations.filter((organization) =>
          organization.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    if (!searched) setSearched(true);
  };

  const handleClear = () => {
    setFilteredOrganizations(organizations);
    setSearchQuery("");
    setSearched(false);
  };

  //console.log(organizations);
  return (
    <div>
      <CampaignHeader
        npo
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        handleClear={handleClear}
        searched={searched}
      />
      <Suspense fallback={<Loader />}>
        <Container className='mb-5 pb-3 h-100'>
          <Row className='h-100'>
            {filteredOrganizations?.length > 0 ? (
              filteredOrganizations.map((organization, index) => (
                <DynamicNpoCard
                  org={DummyOrganizations[index]}
                  organization={organization}
                />
              ))
            ) : (
              <div
                className='w-100  d-flex align-items-center justify-content-center'
                style={{
                  height: "30vh",
                }}
              >
                <span
                  style={{
                    color: "gray",
                  }}
                  className='fs-3'
                >
                  No NPO's Found
                </span>
              </div>
            )}
          </Row>
        </Container>
      </Suspense>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  useGetSingleQAQuery,
} from '../../../store/apiSlice'
const SingleQA = () => {
  const handleEditorChange = (html) => {
    setCompanydescription(html);
  };
  let content
  const id = useSelector((state) => state.posts.id)
  const {
    data,
    isLoading,
    isSuccess,
  } = useGetSingleQAQuery(id)
  useEffect(() => {
    setCompanydescription(data?.company_description);
  }, [data]);
  const [companydescription, setCompanydescription] = useState('');
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    console.log(data)
    const { company_name, active, full_name, phone, email, website, youtube, facebook, instagram, linkedin, twitter, location, featured, logo, id, registration_date } = data
    console.log(companydescription)
    content = (
      <div className='flex w-full flex-col font-bold text-xl'>
        <div className='font-black flex flex-wrap gap-2  items-end w-full h-full border-solid border border-black-900'>
          <div className='font-black flex flex-wrap gap-2  items-end w-full h-full'>
            <input type="text" placeholder='name1' className="input input-xs bg-gray-200  FullName" name="FullName" id="FullName" /><input className="input input-xs bg-gray-200 " type="text" placeholder='email1' name="username" /><button className='btn btn-primary btn-xs'
              onClick={
                e => {
                  alert()
                  e.preventDefault();
                  const endpoint = "https://l0eg19aj82.execute-api.us-east-1.amazonaws.com/default/shareJob";
                  const body = JSON.stringify({
                    name: '',

                    job: '',

                    toEmail: "jinwei6@gmail.com",
                    email: 'postjobs@academicjobs.com',
                    desc: "desc",
                  });
                  const requestOptions = {
                    method: "POST",
                    body,
                  };


                  fetch(endpoint, requestOptions)
                    .then((response) => {
                      if (!response.ok) throw new Error("Error in fetch");
                      return response.json();
                    })
                    .then((response) => {
                      // Handle successful response if needed
                    })
                    .catch((error) => {
                      // Handle error or log it
                      console.error("Fetch error:", error);
                    });




                }
              }
            >Email22222222222222</button>
            <input type="text" placeholder='name2' className="input input-xs bg-gray-200  FullName" name="FullName" id="FullName" /><input className="input input-xs bg-gray-200 " type="text" placeholder='email2' name="username" /><button className='btn btn-primary btn-xs'>Email</button>
          </div>
          <div className='font-black flex flex-wrap gap-2  items-end w-full h-full'>
            <input type="text" placeholder='name3' className="input input-xs bg-gray-200  FullName" name="FullName" id="FullName" /><input className="input input-xs bg-gray-200 " type="text" placeholder='email3' name="username" /><button className='btn btn-primary btn-xs'>Email</button>
            <input type="text" placeholder='name4' className="input input-xs bg-gray-200  FullName" name="FullName" id="FullName" /><input className="input input-xs bg-gray-200 " type="text" placeholder='email4' name="username" /><button className='btn btn-primary btn-xs'>Email</button>
          </div>
        </div >
        <form className='font-black flex flex-wrap gap-2  items-end w-full h-full border-solid border border-black-900' method="post" enctype="multipart/form-data" action="https://academicjobs.mysmartjobboard.com/admin/employers/add/" onsubmit="disableSubmitButton('submitAdd');" >
          <div className="form-group">
            <label className="col-md-2 control-label">Full Name</label>
            <div className="col-md-7">
              <input type="text" value={full_name} className="input input-xs bg-gray-200 FullName" name="FullName" id="FullName" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Job Title</label>
            <div className="col-md-7">
              <input type="text" value="" className="input input-xs bg-gray-200 custom_field_JobTitle_2067" name="custom_field_JobTitle_2067" id="custom_field_JobTitle_2067" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Email&nbsp;<span className="required">*</span></label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" type="text" value={email} name="username" />
              <div data-lastpass-icon-root="true" ></div></div>
          </div>
          <button className='btn btn-primary btn-xs' onClick={
            e => {
              alert()
              e.preventDefault();
              const endpoint = "https://l0eg19aj82.execute-api.us-east-1.amazonaws.com/default/shareJob";
              const body = JSON.stringify({
                name: '',
    
                job: '',

                toEmail: email,
                email: 'postjobs@academicjobs.com',
                desc: "desc",
              });
              const requestOptions = {
                method: "POST",
                body,
              };


    fetch(endpoint, requestOptions)
      .then((response) => {
        if (!response.ok) throw new Error("Error in fetch");
        return response.json();
      })
      .then((response) => {
        // Handle successful response if needed
      })
      .catch((error) => {
        // Handle error or log it
        console.error("Fetch error:", error);
      });
  



            }
          }>Email</button>
          <div className="form-group">
            <label className="col-md-2 control-label">Password&nbsp;<span className="required">*</span></label>
            <div className="col-md-7">
              <div className="row">
                <div className="col-xs-12 form-range">
                  <input className="input input-xs bg-gray-200" type="password" name="password" autoComplete="new-password" />
                  <div data-lastpass-icon-root="true" ></div></div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Phone</label>
            <div className="col-md-7">
              <div className="half">
                <input className="input input-xs bg-gray-200" type="text" value={phone} name="Phone" id="Phone" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Featured</label>
            <input className="input input-xs bg-gray-200" type="checkbox" name="featured" id="featured" value={featured} />
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Region&nbsp;<span className="required">*</span></label>
            <div className="col-md-7">
              <select name="custom_field_Region1_2112" id="custom_field_Region1_2112">
                <option value="">Select Region</option>
                <option value="176">Africa</option>
                <option value="177">Asia</option>
                <option value="178">Australia</option>
                <option value="179">Canada</option>
                <option value="180">Europe</option>
                <option value="181">India</option>
                <option value="182">Middle East</option>
                <option value="183">New Zealand</option>
                <option value="184">South America</option>
                <option value="185">United Kingdom</option>
                <option value="186">United States</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Institution-Location</label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" id="Location_Country" name="Location_Country" type="hidden" className="place-autoComplete__sub" value="" />
              <input className="input input-xs bg-gray-200" id="Location_City" name="Location_City" type="hidden" className="place-autoComplete__sub" value="" />
              <input className="input input-xs bg-gray-200" id="Location_State" name="Location_State" type="hidden" className="place-autoComplete__sub" value="" />
              <input className="input input-xs bg-gray-200" id="Location_ZipCode" name="Location_ZipCode" type="hidden" className="place-autoComplete__sub" value="" />
              <input className="input input-xs bg-gray-200" id="Location_Latitude" name="Location_Latitude" type="hidden" className="place-autoComplete__sub" value="" />
              <input className="input input-xs bg-gray-200" id="Location_Longitude" name="Location_Longitude" type="hidden" className="place-autoComplete__sub" value="" />
              <input className="input input-xs bg-gray-200" id="Location" type="text" value="" className="form-control place-autoComplete ui-autoComplete-input" name="Location" data-placeholder="Preferred location (optional)" autoComplete="off" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Institution Name&nbsp;<span className="required">*</span></label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" value={company_name} type="text" className="CompanyName1" name="CompanyName" id="CompanyName" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Institution Acronym [ie: ACU] or Nick name [ie: UniMelb]</label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" type="text" value="" className="custom_field_InstitutionAcronym_2098" name="custom_field_InstitutionAcronym_2098" id="custom_field_InstitutionAcronym_2098" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Logo</label>
            <div className="col-md-7">
              <div>
                <div className="input-group input-group__file">
                  <input className="input input-xs bg-gray-200" type="text" value="" alt="" />
                  <input className="input input-xs bg-gray-200" type="file" field_id="Logo" className="" accept="image/*" name="Logo" />
                  <button className="btn btn-secondary">Upload</button>
                </div>
                <div className="pull-left profile_logo_Logo">
                  <img src="" alt="" border="0" />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <ReactQuill value={companydescription} onChange={handleEditorChange} />
            <label className="col-md-2 control-label">Institution Description</label>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Website</label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" type="text" value="website" className="WebSite" name="WebSite" id="WebSite" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Job Page URL</label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" type="text" value="" className="custom_field_JobPageURL_2100" name="custom_field_JobPageURL_2100" id="custom_field_JobPageURL_2100" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Country&nbsp;<span className="required">*</span></label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" type="text" value="" className="custom_field_Country_2099" name="custom_field_Country_2099" id="custom_field_Country_2099" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">University-Photo-Top (FOR AJ ADMIN STAFF ONLY)</label>
            <div className="col-md-7">
              <div className="input-group input-group__file">
                <input className="input input-xs bg-gray-200" type="text" value="" alt="" />
                <input className="input input-xs bg-gray-200" type="file" name="custom_field_UniversityPhotoTop_2097" accept="image/*" />
                <span className="input-group-btn">
                  <a href="#" className="btn btn-default btn-change btn-change__upload"><i className="fa fa-upload" aria-hidden="true"></i>Upload</a>
                </span>
              </div>
              <div id="file_custom_field_UniversityPhotoTop_2097">
                <img src="" alt="" border="0" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Headline-Blurb-SEO (FOR AJ ADMIN STAFF ONLY)</label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" type="text" value="" className="custom_field_HeadlineBlurbSEO_2096" name="custom_field_HeadlineBlurbSEO_2096" id="custom_field_HeadlineBlurbSEO_2096" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">List of courses [use bullet points] (FOR AJ ADMIN STAFF ONLY)</label>
            <div className="col-md-7">
              <textarea id="custom_field_Listofcourses_2101" name="custom_field_Listofcourses_2101" className=" wysiwygable" aria-hidden="true"></textarea>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Facebook (FOR AJ ADMIN STAFF ONLY)</label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" type="text" value={facebook} className="facebook" name="facebook" id="facebook" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">LinkedIn (FOR AJ ADMIN STAFF ONLY)</label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" type="text" value={linkedin} className="linkedin" name="linkedin" id="linkedin" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Instagram (FOR AJ ADMIN STAFF ONLY)</label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" type="text" value={instagram} className="instagram" name="instagram" id="instagram" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Twitter (FOR AJ ADMIN STAFF ONLY)</label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" type="text" value={twitter} className="twitter" name="twitter" id="twitter" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">YouTube (FOR AJ ADMIN STAFF ONLY)</label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" type="text" value={youtube} className="youtube" name="youtube" id="youtube" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Photo Gallery (FOR AJ ADMIN STAFF ONLY)</label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" type="hidden" name="photo_gallery" value="29f8dc4e7096edc354c325589c2e8398" />
              <input className="input input-xs bg-gray-200" type="hidden" name="photo_gallery_changed" value="" />
              <div className="gallery-type ui-sortable" data-id="29f8dc4e7096edc354c325589c2e8398" data-field-name="photo_gallery" data-max-images="10">
                <div className="slide new">
                  <div className="js_slide-new dz-clickable"></div>
                  <div className="slide__new"><span>Add New Picture</span></div>
                  <div className="slide-preview"></div>
                  <a href="#"><i className="fa fa-times"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Institution-Courses-Department (FOR AJ ADMIN STAFF ONLY)</label>
            <div className="col-md-7">
              <textarea id="custom_field_Listofcourses_2101" name="custom_field_Listofcourses_2101" className=" wysiwygable" aria-hidden="true"></textarea>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">City of Main Campus (FOR AJ ADMIN STAFF ONLY)</label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" type="text" value="" className="custom_field_CityofMainCampus_2102" name="custom_field_CityofMainCampus_2102" id="custom_field_CityofMainCampus_2102" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Campus Locations [bullet point list] (FOR AJ ADMIN STAFF ONLY)</label>
            <div className="col-md-7">
              <textarea id="custom_field_Listofcourses_2101" name="custom_field_Listofcourses_2101" className=" wysiwygable" aria-hidden="true"></textarea>          </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Institution URL in Academic Jobs (i.e. /monash-university-jobs) (FOR AJ ADMIN STAFF ONLY)</label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" type="text" value="" className="custom_field_InstitutionURLinAcad_2105" name="custom_field_InstitutionURLinAcad_2105" id="custom_field_InstitutionURLinAcad_2105" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Institution URL KEY WORDS (i.e. monash jobs, careers at monash, monash university positions) (FOR AJ ADMIN STAFF ONLY)</label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" type="text" value="" className="custom_field_InstitutionURLKEYWOR_2106" name="custom_field_InstitutionURLKEYWOR_2106" id="custom_field_InstitutionURLKEYWOR_2106" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Institution URL META DESCRIPTIONS (FOR AJ ADMIN STAFF ONLY)</label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" type="text" value="" className="custom_field_InstitutionURLMETADE_2107" name="custom_field_InstitutionURLMETADE_2107" id="custom_field_InstitutionURLMETADE_2107" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">University FAQ for google (FOR AJ ADMIN STAFF ONLY)</label>
            <div className="col-md-7">
              <textarea id="custom_field_Listofcourses_2101" name="custom_field_Listofcourses_2101" className=" wysiwygable" aria-hidden="true"></textarea>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Blog links relating to University (FOR AJ ADMIN STAFF ONLY)</label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" type="text" value="" className="custom_field_BloglinksrelatingtoU_2110" name="custom_field_BloglinksrelatingtoU_2110" id="custom_field_BloglinksrelatingtoU_2110" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Region2</label>
            <div className="col-md-7">
              <input className="input input-xs bg-gray-200" type="text" value="" className="custom_field_Region_2104" name="custom_field_Region_2104" id="custom_field_Region_2104" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-7 col-md-offset-2">
              <input className="input input-xs bg-gray-200" type="submit" value="Save" className="btn btn--primary" id="submitAdd" />
            </div>
          </div>
        </form>
        <ToastContainer />
      </div >
    )
  }
  return <div className='overflow-y w-full'>{content}</div>
}
export default SingleQA

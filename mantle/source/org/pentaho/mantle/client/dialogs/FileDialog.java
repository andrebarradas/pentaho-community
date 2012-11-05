/*
 * This program is free software; you can redistribute it and/or modify it under the 
 * terms of the GNU Lesser General Public License, version 2.1 as published by the Free Software 
 * Foundation.
 *
 * You should have received a copy of the GNU Lesser General Public License along with this 
 * program; if not, you can obtain a copy at http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html 
 * or from the Free Software Foundation, Inc., 
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Lesser General Public License for more details.
 *
 * Copyright 2008 - 2009 Pentaho Corporation.  All rights reserved.
 * 
*/
package org.pentaho.mantle.client.dialogs;

import java.util.ArrayList;
import java.util.List;

import org.pentaho.gwt.widgets.client.dialogs.GlassPane;
import org.pentaho.gwt.widgets.client.filechooser.FileChooserDialog;
import org.pentaho.gwt.widgets.client.filechooser.FileChooserListener;
import org.pentaho.gwt.widgets.client.filechooser.FileFilter;
import org.pentaho.gwt.widgets.client.filechooser.FileChooser.FileChooserMode;

import com.google.gwt.user.client.Window;
import com.google.gwt.xml.client.Document;
import org.pentaho.mantle.client.MantleApplication;

/*
 * Convenience class for showing FileChooserDialog while maintaining a last browsed location.
 * 
 */
public class FileDialog{

  private static String lastPath = "";
  private ArrayList<FileChooserListener> listeners = new ArrayList<FileChooserListener>();
  private Document doc;
  private String title, okText;
  private String[] fileTypes;
  private String path;
  
  public FileDialog(Document doc, String title, String okText, String[] fileTypes){
    this.doc = doc;
    this.title = title;
    this.okText = okText;
    this.fileTypes = fileTypes;
  }

  public FileDialog(Document doc, String path, String title, String okText, String[] fileTypes){
    this(doc, title, okText, fileTypes);
    this.path = path;
  }
  
  
  public void show(){
    String pathToShow = (path != null) ? path : FileDialog.lastPath;
    final FileChooserDialog dialog = new FileChooserDialog(FileChooserMode.OPEN, pathToShow, doc, false, true, title, okText){
      @Override
      public void hide() {
        super.hide();
        GlassPane.getInstance().hide();
      }
      
      
    };
    dialog.setSubmitOnEnter(MantleApplication.submitOnEnter);
    dialog.addFileChooserListener(new FileChooserListener() {

      public void fileSelected(String solution, String path, String name, String localizedFileName) {
        dialog.hide();
        
        FileDialog.lastPath = "/"+solution+ path;
        
        
        for(FileChooserListener listener : listeners){
          listener.fileSelected(solution, path, name, localizedFileName);
        }
      }

      public void fileSelectionChanged(String solution, String path, String name) {
      }
      public void dialogCanceled(){

      }
    });
    dialog.setFileFilter(new FileFilter(){

      public boolean accept(String name, boolean isDirectory, boolean isVisible) {
        if(isDirectory && isVisible){
          return true;
        }
        if(name.indexOf(".") == -1){
          return false;
        }
        String extension = name.substring(name.lastIndexOf(".")+1);
        
        for(int i=0; i< fileTypes.length; i++){
          if(fileTypes[i].trim().equalsIgnoreCase(extension) && isVisible){
            return true;
          }
        }
        return false;
      }
      
    });
    
    GlassPane.getInstance().show();
    dialog.center();
  }
  
  public void addFileChooserListener(FileChooserListener listener){
    if(!listeners.contains(listeners)){
      listeners.add(listener);
    }
  }
}